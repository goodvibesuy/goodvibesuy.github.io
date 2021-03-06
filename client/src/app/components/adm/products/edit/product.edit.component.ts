import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
// service
import { ProductsService } from '../../../../services/products.service';
import { ImagesService } from '../../../../services/images.service';
import { SupplyService } from '../../../../services/supply.service';
// datatypes
import { Product } from '../../../../../../../datatypes/product';
import { Supply } from '../../../../../../../datatypes/supply';
import { ResultCode } from '../../../../../../../datatypes/result';
// models
import { GVFile } from '../../../../models/gvfile.model';
import { Unit } from '../../../../models/unit.model';
import * as _ from 'lodash';
import { ProductSupply } from '../../../../../../../datatypes/productSupply';
import { GroupPosService } from '../../../../services/group-pos.service';
import { GroupPos } from '../../../../../../../datatypes/groupPos';
import { AlertService } from '../../../../modules/alert/alert.service';

@Component({
    templateUrl: './product.edit.component.html',
    styleUrls: ['./product.edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
    paramsSub: any;

    public product: Product;
    public units: Unit[];
    public supplies: Supply[];
    private imageFile: GVFile;
    public groupsPos: GroupPos[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private domSanitizer: DomSanitizer,
        private productsService: ProductsService,
        private suppliesService: SupplyService,
        private imagesService: ImagesService,
        private groupPosService: GroupPosService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.paramsSub = this.activatedRoute.params.subscribe(
            params => {
                this.loadProduct(params['id']);
            },
            err => {
                console.error(err);
                this.alertService.error('Error cargando el producto.');
            }
        );
        this.suppliesService.getLatestPrices().subscribe(
            s => {
                this.supplies = s;
            },
            err => {
                console.error(err);
                this.alertService.error('Error cargando el producto.');
            }
        );
        this.suppliesService.getUnits().subscribe(
            u => {
                this.units = u;
            },
            err => {
                console.error(err);
                this.alertService.error('Error cargando el producto.');
            }
        );
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }

    loadProduct(id: number): void {
        this.productsService.get(id).subscribe(res => {
            if (res.result == ResultCode.OK) {
                this.product = res.data;
                this.loadProductPrices(id);
            } else {
                console.error(res.message);
                this.alertService.error(res.message);
            }
        },
            error => {
                console.error(error);
                this.alertService.error('Error cargando la información del producto');
            });
    }

    findPrice(idGroup) {
        return this.product.prices.find(f => f.idGroupCustomer == idGroup);
    }

    loadProductPrices(id: number): void { 
        this.groupPosService.get().subscribe(
            result => {
                if (result.result == ResultCode.OK) {
                    this.groupsPos = result.data;

                    this.productsService.getPriceByProduct(id).subscribe(
                        result => {
                            if (result.result == ResultCode.OK) {
                                this.product.prices = result.data;

                                // agrega en product.prices los grupos groupsPos que faltan
                                if (this.product.prices.length < this.groupsPos.length) {
                                    let newPrices = this.groupsPos.filter(gpos => this.product.prices.filter(p => p.idGroupCustomer == gpos.id).length == 0);
                                    for (let index = 0; index < newPrices.length; index++) {
                                        const element = newPrices[index];
                                        this.product.prices.push({ idGroupCustomer: element.id, amount: 0 });
                                    }
                                }

                            } else {
                                console.error(result.message);
                                this.alertService.error(result.message);
                            }
                        },
                        error => {
                            console.error(error);
                            this.alertService.error('Error obteniendo la información del producto');
                        }
                    );
                } else {
                    console.error(result.message);
                    this.alertService.error(result.message);
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo la información del producto');
            });
    }

    isValid() {
        return !!this.product && !!this.product.name && this.product.name != '';
    }

    actualizar() {
        if (this.isValid()) {
            const category: string = 'productos';

            for (let index = 0; index < this.product.prices.length; index++) {
                const element = this.product.prices[index];
                if (element.amount == null) {
                    element.amount = 0;
                }
            }

            var promise = this.productsService.update(this.product);
            promise.subscribe(
                data => {
                    if (!!this.imageFile) {
                        this.imagesService
                            .sendImage(category, this.product.path_image, this.imageFile.size, this.imageFile.data)
                            .subscribe(
                                res => {
                                    const keepAfterRouteChange = true;
                                    this.alertService.success('Producto actualizado correctamente!', keepAfterRouteChange);
                                    this.router.navigateByUrl('/admin/productos');
                                },
                                error => {
                                    console.error(error);
                                    this.alertService.error('Error actualizando el producto.');
                                }
                            );
                    } else {
                        const keepAfterRouteChange = true;
                        this.alertService.success('Producto actualizado correctamente!', keepAfterRouteChange);
                        this.router.navigateByUrl('/admin/productos');
                    }
                },
                error => {
                    console.error(error);
                    this.alertService.error('Error actualizando el producto.');
                });
        }
    }

    getImage() {
        return this.imageFile
            ? this.domSanitizer.bypassSecurityTrustUrl(
                'data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data
            )
            : 'images/productos/' + this.imagesService.getSmallImage(this.product.path_image);
    }

    handleSelected(file: GVFile): void {
        if (!!file) {
            this.imageFile = file;
            this.product.path_image = this.product.id + '_' + this.imageFile.name;
        }
    }

    sortSupplies(supplies: ProductSupply[]): ProductSupply[] {
        return _.chain(supplies)
            .sortBy(ps => _.find(this.supplies, s => s.id == ps.idSupply).name)
            .value();
    }

    findGroup(idGroup: number): GroupPos {
        return this.groupsPos.find(gp => gp.id == idGroup);
    }

    findSupply(idSupply: number): Supply {
        return this.supplies.find(s => s.id == idSupply);
    }

    findUnit(idSupply: number): Unit {
        return this.units.find(u => u.id == this.findSupply(idSupply).unit);
    }

    totalSupplyPrice(): number {
        return _.chain(this.product.supplies)
            .map(s => s.quantity * this.findSupply(s.idSupply).amount)
            .sum()
            .value();
    }

    deleteSupply(idSupply: number) {
        this.productsService.deleteSupply(this.product.id, idSupply).subscribe(
            d => {
                this.loadProduct(this.product.id);
            },
            err => {
                // error handling
                console.log(err);
            }
        );
    }
}

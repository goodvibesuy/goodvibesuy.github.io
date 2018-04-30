import { Component, OnInit } from '@angular/core';
import { Provider } from '../../../../../../datatypes/provider';
import { ProvidersService } from '../../../services/providers.service';

@Component({
    selector: 'app-provider',
    templateUrl: './provider.component.html',
    styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

    private providers: Provider[];
    private providerName:string;
    constructor(private providerService:ProvidersService) { }

    ngOnInit() {
        this.getAllProviders();
    }

    getAllProviders():void{
        this.providerService.getAll().subscribe(
            response => {
                console.log(response);
                if(response.result > 0){
                    this.providers = response.data;
                }
            }
        )
    }

    newProvider():void{
        this.providerService.add(this.providerName).subscribe(
            response => {
                this.getAllProviders();
            }
        )
    }
}

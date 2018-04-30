import { PointOfSale } from '../pointOfSale';

export class LineViewingView {
    private idViewing: number;
    private date: Date;
    private pos: PointOfSale;
    private products: Array<any>;

    constructor(date: Date, pos: PointOfSale, idViewing: number) {
        this.date = date;
        this.pos = pos;
        this.products = new Array<any>();
        this.idViewing = idViewing;
    }

    public setProducts(products: Array<any>): void {
        this.products = products;
    }

    public getDetailProduct(idProduct: number): any {
        return this.products.filter(input => input.idproduct === idProduct);
    }

    public getTransactionByProductByType(idProduct: number, type: string): any {
        return this.products.filter(input => input.idproduct === idProduct).filter(item => item.type === type);
    }

    public getQuantityTransactionType(type: string): number {
        var transactionsTypes = this.products.filter(item => item.type === type);

        return transactionsTypes.reduce(function (a, b) {
                                            return a + b["quantity"];
                                        }, 0);
    }

    /*
    products    
    {idviewing: 2, idproduct: 1, quantity: 3, type: "delivery"}
    {idviewing: 2, idproduct: 1, quantity: 1, type: "return"}
    {idviewing: 2, idproduct: 1, quantity: 0, type: "empty"}
    */

    public getDate(): Date {
        return this.date;
    }

    public getPointOfSale(): PointOfSale {
        return this.pos;
    }

    public getIdViewing(): number {
        return this.idViewing;
    }

    public setPointOfSale(pos: PointOfSale): void {
        this.pos = pos;
    }

    public setDate(date: Date): void {
        this.date = date;
    }

    public addProduct(productViewing: any): void {
        this.products.push(productViewing);
    }

    public getProducts(): Array<any> {
        return this.products;
    }

}
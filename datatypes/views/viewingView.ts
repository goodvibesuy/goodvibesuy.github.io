import {PointOfSale} from '../pointOfSale';

export class viewingView {
    private date: Date;
    private pos:PointOfSale;
    private products:Map<Number,Array<any>>;

    constructor() {
        
    }

    public setDate(date:Date):void{
        this.date = date;
    }

    public getDate():Date{
        return this.date;
    }

    public addProducts(idPOS:number,products:Array<any>):void{
        this.products.set(idPOS,products);
    }

    public getProducts(idPOS):Array<any>{
        return this.products.get(idPOS);
    }

}
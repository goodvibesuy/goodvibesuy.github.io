import { User } from "./user";
import { PointOfSale } from "./pointOfSale";
import { Product } from "./product";

export class Route {
    public id: number;
    public name: string;
    public date: Date;
    public user:User;
    public pointsOfSale:PointOfSale[];
    public stock:{product:Product,quantity:number}[];

    constructor() {
        this.id = 0;
        this.name = "";
        this.date = new Date();
        this.user = new User();
        this.pointsOfSale = new Array<PointOfSale>();
        this.stock = new Array<{product:Product,quantity:number}>();
    }

    public addProductStock(productStock:{product:Product,quantity:number}):void{
        this.stock.push(productStock);
    }

    public getStock():{product:Product,quantity:number}[]{
        return this.stock;
    }

    public setUser(user:User):void{
        this.user = user;
    }

    public getUser():User{
        return this.user;
    }

    public addPointOfSale(POS:PointOfSale):void{
        this.pointsOfSale.push(POS);
    }

    public removePointOfSale(idPointOfSale:number):void{        
        this.pointsOfSale = this.pointsOfSale.filter(function(val:PointOfSale){
            return val.id != idPointOfSale;
        });
    }

    public getPointsOfSale():PointOfSale[]{
        return this.pointsOfSale;
    }

    public reorderPointOfSale(position:number, newPosition:number):void{
        var auxPOS = this.pointsOfSale[newPosition];
        this.pointsOfSale[newPosition] =  this.pointsOfSale[position];
        this.pointsOfSale[position] =  auxPOS;
    }
}
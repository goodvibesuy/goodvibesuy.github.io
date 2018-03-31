import { User } from "./user";
import { PointOfSale } from "./pointOfSale";

export class Route {
    public id: number;
    public name: string;
    public date: Date;
    public user:User;
    public pointsOfSale:PointOfSale[];

    constructor() {
        this.pointsOfSale = new Array<PointOfSale>();
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
        
    }

    public getPointsOfSale():PointOfSale[]{
        return this.pointsOfSale;
    }
}
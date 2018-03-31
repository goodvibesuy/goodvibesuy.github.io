import { User } from "./user";
import { PointOfSale } from "./pointOfSale";

export class Route {
    public id: number;
    public name: string;
    public date: Date;
    public user:User;
    public pointsOfSale:PointOfSale[];

    constructor() {
        this.id = 0;
        this.name = "";
        this.date = new Date();
        this.user = new User();
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
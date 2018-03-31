import { User } from "./user";
import { PointOfSale } from "./pointOfSale";

export interface Route {
    id: number;
    name: string;
    date: Date;
    user:User;
    pointsOfSale:PointOfSale[];
}
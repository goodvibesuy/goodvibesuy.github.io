import { ProductSupply } from "./productSupply";

export interface Product {
	id: number;
	name: string;
    path_image: string;
    supplies: ProductSupply[];
    prices:{idProvicer:number,price:number}[];

}
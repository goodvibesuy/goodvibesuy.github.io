import { ProductSupply } from "./productSupply";
import { GroupPrice } from './groupPrice';

export interface Product {
	id: number;
	name: string;
    path_image: string;
    supplies: ProductSupply[];
    prices: GroupPrice[];
}
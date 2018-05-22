import { CustomerType } from "./customer";

export interface Client {
	id: number;
    name: string;    
    lastName: string;
    address: string;    
    tel: string;
    image: string;
    idGroup: number;
    coord?: { lat(): number; lng(): number; };
    type: CustomerType;
}
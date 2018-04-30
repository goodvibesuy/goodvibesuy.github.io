export interface Client {
	id: number;
    names: string;    
    lastnames:string;
    address:string;    
    phone:string;
    coord?: { lat(): number; lng(): number; };
}
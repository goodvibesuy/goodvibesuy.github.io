export interface Client {
	id: number;
    name: string;    
    lastName: string;
    address: string;    
    tel: string;
    idGroup: number;
    coord?: { lat(): number; lng(): number; };
}
export interface Customer {
    id: number;
    name: string;
    address: string;
    tel: string;
    idGroup: number;
    coord?: { lat(): number; lng(): number; };
    type: CustomerType;
}

export enum CustomerType { PointOfSale = 1, Client = 2 }


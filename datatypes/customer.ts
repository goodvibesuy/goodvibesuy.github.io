export interface Customer {
    id: number;
    name: string;
    address: string;
    tel: string;
    idGroup: number;
    coord?: { lat(): number; lng(): number; };
}

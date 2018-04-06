export interface GroupPos {
    id: number;
    name: string;
    address: string;
    tel: string;
    image: string;
    coord?: { lat(): number; lng(): number; }
    businessName: string;
    contactName: string;
    RUT: string;
    idGroup: number;
}
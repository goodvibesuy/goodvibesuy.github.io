import { CustomerType } from "./customer";

export class PointOfSale {
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
    //TODO sacar
    idViewing:number;
    type: CustomerType;

    constructor() {
        this.id = 0;
        this.name = "";
        this.tel = "";
        this.image = "";
        this.address = "";
        this.businessName = '';
        this.contactName = '';
        this.RUT = '';
        this.idGroup = 0;
        this.idViewing = 0;
        this.type = CustomerType.PointOfSale;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setTel(tel: string): void {
        this.tel = tel;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public setAddress(address: string): void {
        this.address = address;
    }
}
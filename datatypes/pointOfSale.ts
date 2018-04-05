export class PointOfSale {
    id: number;
    name: string;
    address: string;
    tel: string;
    image:string;
    coord:google.maps.LatLng;
    businessName:string;
    contactName:string;
    RUT:string;
    idGroup: number;

    constructor() {
        this.id = 0;
        this.name = "";
        this.tel = "";
        this.image = "";
        this.address = "";
    }    

    public setId(id:number):void{
        this.id = id;
    }

    public setName(name:string):void{
        this.name = name;
    }

    public setTel(tel:string):void{
        this.tel = tel;
    }

    public setImage(image:string):void{
        this.image = image;
    }

    public setAddress(address:string):void{
        this.address = address;
    }
}
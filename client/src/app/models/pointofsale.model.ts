export interface PointOfSale {
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
}
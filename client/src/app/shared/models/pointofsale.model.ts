export interface PointOfSale {
    id: number;
    name: string;
    address: string;
    tel: string;
    image:string;
    coord:google.maps.LatLng;
}
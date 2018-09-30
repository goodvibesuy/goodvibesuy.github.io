import { PointOfSale } from '../pointOfSale';
import { LineViewingView } from "./lineViewingView";

export class ViewingView {
    public date: Date;
    private pos: PointOfSale;
    private lines: LineViewingView[];

    
    private results:any[];
    

    constructor() {
        
        this.lines = new Array<LineViewingView>();
        this.results = new Array();
    }


    public setDate(date: Date): void {
        this.date = date;
    }

    public getDate(): Date {
        return this.date;
    }

    public addLine(line: LineViewingView): void {
        this.lines.push(line);
    }

    public getLineWithMajorPercentReturn(): LineViewingView {
        var line: LineViewingView = null;
        var percent = 0;
        for (let i = 0; i < this.lines.length; i++) {
            var percentLine = this.lines[i].getQuantityTransactionType("return") / this.lines[i].getQuantityTransactionType("delivery");
            if (percentLine > percent) {
                percent = percentLine;
                line = this.lines[i];
            }
        }
        return line;
    }

    public getTotalTransactionByProductByType(idProduct: number, type: string): number {        
        var quantity = 0;
        if(this.results[type] === undefined){
            this.results[type] = new Array();
            if(this.results[type][idProduct] === undefined){                
                for (let i = 0; i < this.lines.length; i++) {
                    let tpt = this.lines[i].getTransactionByProductByType(idProduct, type)[0];
                    if ( tpt !== undefined) {
                        quantity += tpt.quantity;
                    }
                }                
                this.results[type][idProduct] =  quantity;
            }
        }else{
            if(this.results[type][idProduct] === undefined){                
                for (let i = 0; i < this.lines.length; i++) {
                    let tpt = this.lines[i].getTransactionByProductByType(idProduct, type)[0];
                    if ( tpt !== undefined) {
                        quantity += tpt.quantity;
                    }
                }                
                this.results[type][idProduct] =  quantity;
            }else{
                quantity = this.results[type][idProduct];
            }
        }        
        return quantity;
    }


    public getTotalTransactionByPOSByType(idPOS: number, type: string): number {
        var quantity = 0;
        let lines = this.getLinesByPOS(idPOS);        
        for (let i = 0; i < lines.length; i++) {
            quantity += lines[i].getQuantityTransactionType(type);
        }
        return quantity;
    }

    /**
     * 
     * @param type - Tipo de transaccion : entrega, devolucion, etc
     */
    public getTotalTransactionByType(type: string): number {
        var quantity = 0;
        let lines = this.getLines();        
        for (let i = 0; i < lines.length; i++) {
            quantity += lines[i].getQuantityTransactionType(type);
        }
        return quantity;
    }

    public getTotalTransactionByGroupPOSByType(idGroupPOS:number, type: string): number {
        var quantity = 0;
        let lines = this.getLinesByGroupPOS(idGroupPOS);
        for (let i = 0; i < lines.length; i++) {
            quantity += lines[i].getQuantityTransactionType(type);
        }
        return quantity;
    }


    //viewingView.getLines()[i].getTransactionByProductByType(p.id,"delivery")[0].quantity

    public getLines(): LineViewingView[] {
        return this.lines;
    }

    public getLinesByPOS(idPOS: number): LineViewingView[] {
        return this.lines.filter(input => input.getPointOfSale().id === idPOS);
    }

    public getLinesByGroupPOS(idGroupPOS:number): LineViewingView[]{
        let lines = this.lines.filter(input => input.getPointOfSale().idGroup === idGroupPOS);
        //console.log(idGroupPOS,lines);
        return lines;
    }
}
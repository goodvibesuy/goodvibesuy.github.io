import {PointOfSale} from '../pointOfSale';
import {LineViewingView} from "./lineViewingView";

export class ViewingView {
    private date: Date;
    private pos:PointOfSale;
    private lines:LineViewingView[];

    constructor() {
        this.lines = new Array<LineViewingView>();
    }

    public setDate(date:Date):void{
        this.date = date;
    }

    public getDate():Date{
        return this.date;
    }

    public addLine(line:LineViewingView):void{
        this.lines.push(line);
    }

    public getLineWithMajorPercentReturn():LineViewingView{
        var line:LineViewingView = null;
        var percent = 0;
        for(let i = 0 ; i < this.lines.length ; i++){
            var percentLine = this.lines[i].getQuantityTransactionType("delivery") / this.lines[i].getQuantityTransactionType("return");
            if(percentLine > percent){
                percent = percentLine;
                line = this.lines[i];
            }            
        }
        return line;        
    }

    public getTotalTransactionByProductByType(idProduct:number,type:"string"):number{
        var quantity = 0;
        for(let i = 0 ; i < this.lines.length ; i++){
            quantity += this.lines[i].getTransactionByProductByType(idProduct,type)[0].quantity;
        }
        return quantity;
    }

    //viewingView.getLines()[i].getTransactionByProductByType(p.id,"delivery")[0].quantity

    public getLines():LineViewingView[]{
        return this.lines;
    }

}
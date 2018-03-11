import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.css']
})
export class GeneralComponent {

    protected token: string;
    protected userSaved: string;
    protected accountId: Number;

    constructor() { 
        console.log(">>>>");
    }

    protected setHeaderValues() {
        this.token = localStorage.getItem("token");
        this.userSaved = localStorage.getItem("user");
        this.accountId = Number(localStorage.getItem("accountId"));
    }

    protected removeHeaderValues() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("accountId");
    }

    protected generateHeader():HttpHeaders{
        let headers = new HttpHeaders({ 'tokenId': this.token || "", 'user': this.userSaved || "", 'accountId': this.accountId.toString() });
        return headers;
    }

}

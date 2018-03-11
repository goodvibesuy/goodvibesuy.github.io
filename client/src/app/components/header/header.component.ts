import { Component, OnInit, DoCheck, OnChanges, SimpleChanges } from "@angular/core";
import { Location } from "@angular/common";
import { AuthenticateService } from "../../services/authenticate.service";
import { Router } from "@angular/router";
import { HeaderService } from "../../services/header.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit{
    private visible:Boolean = false;
    private token: string;
    private userSaved: string;
    private accountId: Number;

    constructor(private router:Router, 
        private location: Location, 
        private authenticateService: AuthenticateService,
        private headerService:HeaderService
    ) { 
    }

    ngOnInit() {
        this.headerService.currentVisibility.subscribe(visibility => this.visible = visibility);
        
        this.token = localStorage.getItem("token");
        this.userSaved = localStorage.getItem("user");
        this.accountId = Number(localStorage.getItem("accountId"));

        if(this.token !== null && this.userSaved !== null){
            this.authenticateService.verifyToken(this.token, this.userSaved, this.accountId).
            subscribe(data => {
                this.visible = data.result;
            });
        }        
    }

    closeSession() {
        this.authenticateService.closeSession(this.token, this.userSaved, this.accountId).
            subscribe(data => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                localStorage.removeItem("accountId");
                this.visible = data.result;
                this.router.navigate(['']);
            });
    }


    getName(): string {
        var name =
            this.location.path() == '' ?
                'Home' :
                (
                    this.location
                        .path()
                        .replace("/", "")[0]
                        .toUpperCase() +
                    this.location
                        .path()
                        .replace("/", "")
                        .substr(1)
                );
        return name.indexOf('/') > 0 ? name.substring(0, name.indexOf('/')) : name;
    }
}

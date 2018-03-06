import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {    
    private token: string;
    private userSaved: string;
    private accountId: Number;

    constructor(private router:Router, private authenticateService: AuthenticateService) { }

    ngOnInit() {
        this.token = localStorage.getItem("token");
        this.userSaved = localStorage.getItem("user");
        this.accountId = Number(localStorage.getItem("accountId"));

        this.authenticateService.verifyToken(this.token, this.userSaved, this.accountId).
            subscribe(data => {                
                if (!data.result) {
                    this.router.navigate(['']);
                }
            });
    }
}

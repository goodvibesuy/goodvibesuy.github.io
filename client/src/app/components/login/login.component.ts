import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginform: FormGroup;

    private username: FormControl;
    private password: FormControl;
    private errorForm: Boolean = false;

    private token: string;
    private userSaved: string;
    private accountId: Number;


    constructor(private router: Router, private authenticateService: AuthenticateService) { }

    ngOnInit() {
        this.createFormControls();
        this.createForm();

        this.token = localStorage.getItem("token");
        this.userSaved = localStorage.getItem("user");
        this.accountId = Number(localStorage.getItem("accountId"));

        if(this.token !== null && this.userSaved !== null){
            this.authenticateService.verifyToken(this.token, this.userSaved, this.accountId).
            subscribe(data => {
                if(data.result){                    
                    this.router.navigate(['dashboard']);    
                }
            });
        }
    }

    createFormControls() {
        this.username = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.required);
    }

    createForm() {
        this.loginform = new FormGroup({
            username: this.username,
            password: this.password
        });
    }


    login() {
        this.authenticateService.login(this.username.value, this.password.value).subscribe(data => {
            console.log(data.result);
            if (data.result) {
                localStorage.setItem("token", data.tokenId);
                localStorage.setItem("user", data.user);
                localStorage.setItem("accountId", data.accountId);
                if(data.rolId === 1){
                    this.router.navigate(['dashboard']);
                }else{
                    this.router.navigate(['recorridos']);
                }                
            } else {
                this.errorForm = true;
            }
        });
    }

}

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
  


  constructor(private router: Router,private authenticateService:AuthenticateService) { }

  ngOnInit() {
      this.createFormControls();
      this.createForm();
  }

  createFormControls() {
    this.username = new FormControl('', Validators.required);    
    this.password = new FormControl('', Validators.required);
  }

  createForm() {
    this.loginform = new FormGroup({
        username : this.username,
        password: this.password
    });
  }


  login(){
    this.authenticateService.login(this.username.value,this.password.value).subscribe(data =>{
        console.log(data.result);
        if(data.result){
            localStorage.setItem("token", data.tokenId);
            localStorage.setItem("user", data.user);
            localStorage.setItem("accountId", data.accountId);            
            this.router.navigate(['dashboard']);
        }else{
            this.errorForm = true;
        }
    });
  }

}

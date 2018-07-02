import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticateService } from '../../services/authenticate.service';
import { TokenService } from '../../services/token.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public loginform: FormGroup;

	public username: FormControl;
	public password: FormControl;
	public errorForm: Boolean = false;

	constructor(
		private router: Router,
		private authenticateService: AuthenticateService,
		private tokenService: TokenService
	) {}

	ngOnInit() {
		this.createFormControls();
		this.createForm();

		this.authenticateService.verifyToken().subscribe(data => {
			if (data.result) {
				this.router.navigate(['dashboard']);
			}
		});
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
				this.tokenService.setToken(data.tokenId, data.user, data.accountId);
				if (data.rolId === 1) {
					this.router.navigate(['dashboard']);
				} else {
					this.router.navigate(['recorridos']);
				}
			} else {
				this.errorForm = true;
			}
		});
	}
}

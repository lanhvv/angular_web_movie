import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../core/services/authentication.service";
import {LoginModel} from "../../../core/models/login.model";
import {AccountService} from "../../../core/auth/account.service";
import {JwtAuthenticationService} from "../../../core/auth/jwt-authentication.service";
import {Router} from "@angular/router";
import {PathConstant} from "../../../core/utils/path.constant";
import {CommonConstant} from "../../../core/utils/common.constant";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public formGroup!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private accountService: AccountService,
    private jwtAuthentication: JwtAuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(2)])
    });
  }

  public getControl(name: string) {
    return this.formGroup.get(name);
  }

  public login() {
    if (this.formGroup.valid) {
      this.authenticationService.login(this.getControl("email")?.value, this.getControl("password")?.value)
        .subscribe((model: LoginModel) => {
            this.accountService.storageAccount(model);
            this.jwtAuthentication.storageToken(model.token);
            let isManager = false;
            for (let role of model.roles.keys()) {
              if (role == CommonConstant.ADMIN || role == CommonConstant.SYSTEM) {
                isManager = true;
              }
            }

            if (isManager) {
              this.router.navigate([PathConstant.ROOT_ADMIN, PathConstant.DASH_BROAD]);
            } else {
              this.router.navigate([PathConstant.ROOT_USER, PathConstant.HOME_PAGE]);
            }
        });
    }
  }
}

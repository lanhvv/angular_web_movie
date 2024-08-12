import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../core/services/authentication.service";
import {AccountService} from "../../../core/auth/account.service";
import {JwtAuthenticationService} from "../../../core/auth/jwt-authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonConstant} from "../../../core/utils/common.constant";
import {PathConstant} from "../../../core/utils/path.constant";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  public formGroup!: FormGroup;
  //toast-messsage
  public bodyToast: any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private routerActive: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      name: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(2)]),
      rePassword: new FormControl("", [Validators.required, Validators.minLength(2)])
    });
  }

  public getControl(name: string) {
    return this.formGroup.get(name);
  }

  public register() {
    if (this.formGroup.valid) {
      if (this.getControl("password")?.value != this.getControl("rePassword")?.value) {
        this.bodyToast = {
          severity: CommonConstant.ERROR,
          summary: "Lỗi",
          detail: "Mật khẩu xác thực không giống"
        }
      }
      const role = this.routerActive.snapshot.parent?.url[0]?.path == "authentication" ? ["ADMIN"] : ["USER"]
      this.authenticationService.register(this.getControl("email")?.value, this.getControl("name")?.value, this.getControl("password")?.value, role)
        .subscribe(
          (success: any) => {
            this.bodyToast = {
              severity: CommonConstant.SUCCESS,
              summary: "Thành công",
              detail: "Đăng ký tài khoản thành công"
            }
            this.router.navigate([PathConstant.LOGIN]);
          },
          (error: any) => {
            this.bodyToast = {
              severity: CommonConstant.ERROR,
              summary: "Lỗi",
              detail: "Đăng ký tài khoản không thành công"
            }
          }
        );
    }
  }
}

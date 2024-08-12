import {Component, OnInit} from '@angular/core';
import {MegaMenuItem} from "primeng/api";
import {PathConstant} from "../../core/utils/path.constant";
import {Router} from "@angular/router";
import {JwtAuthenticationService} from "../../core/auth/jwt-authentication.service";
import {AccountService} from "../../core/auth/account.service";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit{
  public paths !: any[];

  constructor(
    private router: Router,
    private  jwtService: JwtAuthenticationService,
    private accountService: AccountService
  ) {
  }

  ngOnInit() {
    this.paths = [
      {path: ["/",PathConstant.ROOT_ADMIN, PathConstant.DASH_BROAD], name: "Thống Kê"},
      {path: ["/",PathConstant.ROOT_ADMIN, PathConstant.MOVIE, PathConstant.LIST], name: "Quản Lý Phim"},
      {path: ["/",PathConstant.ROOT_ADMIN, PathConstant.CATEGORIES], name: "Quản lý Danh Mục"},
      {path: ["/",PathConstant.ROOT_ADMIN, PathConstant.USER], name: "Quản Lý Thông Tin Người Dùng"},
      {path: ["/",PathConstant.ROOT_ADMIN, PathConstant.ADMIN], name: "Quản Lý Thông Tin Quản Trị"},
    ];
  }

  public logout() {
    this.jwtService.clearToken();
    this.accountService.clearAccount();
    this.router.navigate(["/","authentication","login"]);
  }
}

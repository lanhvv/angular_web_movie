import {Component, OnInit} from '@angular/core';
import {MegaMenuItem} from "primeng/api";
import {PathConstant} from "../../core/utils/path.constant";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit{
  public paths !: any[];

  ngOnInit() {
    this.paths = [
      {path: ["/",PathConstant.ROOT_ADMIN, PathConstant.DASH_BROAD], name: "Thống Kê"},
      {path: ["/",PathConstant.ROOT_ADMIN, PathConstant.MOVIE, PathConstant.LIST], name: "Quản Lý Phim"},
      {path: ["/",PathConstant.ROOT_ADMIN, PathConstant.CATEGORIES], name: "Quản lý Danh Mục"},
      {path: ["/",PathConstant.ROOT_ADMIN, PathConstant.USER], name: "Quản Lý Thông Tin Người Dùng"},
      {path: ["/",PathConstant.ROOT_ADMIN, PathConstant.ADMIN], name: "Quản Lý Thông Tin Quản Trị"},
    ];
  }
}

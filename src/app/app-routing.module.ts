import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PathConstant} from "./core/utils/path.constant";
import {RoleAdminCacActiveChildGuard} from "./core/guard/role-admin-cac-active-child.guard";
import {RoleUserCanActiveChildGuard} from "./core/guard/role-user-can-active-child.guard";

const routes: Routes = [
  {
    path:"authentication",
    loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: PathConstant.ROOT_ADMIN,
    canActivateChild: [RoleAdminCacActiveChildGuard],
    loadChildren: () => import("./features/manager/manager.module").then(m => m.ManagerModule)
  },
  {
    path: PathConstant.ROOT_USER,
    canActivateChild: [RoleUserCanActiveChildGuard],
    loadChildren: () => import("./features/user/user.module").then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

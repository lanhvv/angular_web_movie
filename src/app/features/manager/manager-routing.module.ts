import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashbroadComponent} from "./dashbroad/dashbroad.component";
import {ManagerComponent} from "./manager.component";
import {PathConstant} from "../../core/utils/path.constant";
import {MovieComponent} from "./movie/movie.component";
import {CategoriesComponent} from "./categories/categories.component";
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {ListMovieComponent} from "./movie/list-movie/list-movie.component";
import {CreateAndUpdateComponent} from "./movie/create-and-update/create-and-update.component";

const routes: Routes = [
  {
    path: "",
    component: ManagerComponent,
    children: [
      {
        path: PathConstant.DASH_BROAD,
        component: DashbroadComponent
      },
      {
        path: PathConstant.MOVIE,
        component: MovieComponent,
        children: [
          {
            path: PathConstant.LIST,
            component: ListMovieComponent
          },
          {
            path: PathConstant.CAU,
            component: CreateAndUpdateComponent
          },
          {
            path: PathConstant.CAU + ":id",
            component: CreateAndUpdateComponent
          }
        ]
      }
      ,
      {
        path: PathConstant.CATEGORIES,
        component: CategoriesComponent
      }
      ,
      {
        path: PathConstant.USER,
        component: UserComponent
      }
      ,
      {
        path: PathConstant.ADMIN,
        component: AdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }

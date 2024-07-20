import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashbroadComponent} from "./dashbroad/dashbroad.component";
import {ManagerComponent} from "./manager.component";

const routes: Routes = [
  {
    path: "",
    component: ManagerComponent,
    children: [
      {
        path: "dash_broad",
        component: DashbroadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }

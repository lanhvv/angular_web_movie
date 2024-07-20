import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
@NgModule({
  declarations: [
    ManagerComponent,
    DashbroadComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
  ]
})
export class ManagerModule { }

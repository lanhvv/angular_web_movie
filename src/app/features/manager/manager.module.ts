import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { MovieComponent } from './movie/movie.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CreateAndUpdateComponent } from './movie/create-and-update/create-and-update.component';
import { ListMovieComponent } from './movie/list-movie/list-movie.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ManagerComponent,
    DashbroadComponent,
    MovieComponent,
    CategoriesComponent,
    UserComponent,
    AdminComponent,
    CreateAndUpdateComponent,
    ListMovieComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    OverlayPanelModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    TableModule
  ]
})
export class ManagerModule { }

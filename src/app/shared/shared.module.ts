import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageValidateComponent} from "./components/message-validate/message-validate.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommonTableComponent } from './components/common-table/common-table.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToastNotifyComponent } from './components/toast-notify/toast-notify.component';
import {MessageService} from "primeng/api";
@NgModule({
  declarations: [MessageValidateComponent, NotFoundComponent, CommonTableComponent, ToastNotifyComponent],
  imports: [
    CommonModule,
    TableModule,
    ToastModule
  ],
  exports: [
    MessageValidateComponent,
    CommonTableComponent,
    ToastNotifyComponent
  ],
  providers: [MessageService]
})
export class SharedModule { }

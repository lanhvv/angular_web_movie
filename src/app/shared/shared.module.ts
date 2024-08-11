import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageValidateComponent} from "./components/message-validate/message-validate.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToastModule } from 'primeng/toast';
import { ToastNotifyComponent } from './components/toast-notify/toast-notify.component';
import {MessageService} from "primeng/api";
@NgModule({
  declarations: [MessageValidateComponent, NotFoundComponent, ToastNotifyComponent],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports: [
    MessageValidateComponent,
    ToastNotifyComponent
  ],
  providers: [MessageService]
})
export class SharedModule { }

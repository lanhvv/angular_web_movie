import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageValidateComponent} from "./components/message-validate/message-validate.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToastModule } from 'primeng/toast';
import { ToastNotifyComponent } from './components/toast-notify/toast-notify.component';
import {MessageService} from "primeng/api";
import { DropzoneImageComponent } from './components/dropzone-image/dropzone-image.component';
import {NgxDropzoneModule} from "ngx-dropzone";
@NgModule({
  declarations: [MessageValidateComponent, NotFoundComponent, ToastNotifyComponent, DropzoneImageComponent],
    imports: [
        CommonModule,
        ToastModule,
        NgxDropzoneModule
    ],
  exports: [
    MessageValidateComponent,
    ToastNotifyComponent,
    DropzoneImageComponent
  ],
  providers: [MessageService]
})
export class SharedModule { }

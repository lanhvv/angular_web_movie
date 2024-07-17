import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageValidateComponent} from "./components/message-validate/message-validate.component";



@NgModule({
  declarations: [MessageValidateComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MessageValidateComponent
  ]
})
export class SharedModule { }

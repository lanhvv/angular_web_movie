import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageValidateComponent} from "./components/message-validate/message-validate.component";
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [MessageValidateComponent, NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MessageValidateComponent
  ]
})
export class SharedModule { }

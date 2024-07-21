import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageValidateComponent} from "./components/message-validate/message-validate.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommonTableComponent } from './components/common-table/common-table.component';



@NgModule({
  declarations: [MessageValidateComponent, NotFoundComponent, CommonTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MessageValidateComponent
  ]
})
export class SharedModule { }

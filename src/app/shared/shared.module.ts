import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageValidateComponent} from "./components/message-validate/message-validate.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommonTableComponent } from './components/common-table/common-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [MessageValidateComponent, NotFoundComponent, CommonTableComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    MessageValidateComponent,CommonTableComponent
  ]
})
export class SharedModule { }

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message-validate',
  templateUrl: './message-validate.component.html',
  styleUrls: ['./message-validate.component.css']
})
export class MessageValidateComponent{

  @Input() public name!: string;
  @Input() public input!: any; //control


}

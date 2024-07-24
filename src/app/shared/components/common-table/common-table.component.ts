import {Component, ContentChild, Input, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit, OnChanges{
  @Input() list : any;
  @Input() page : number = 1;
  @Input() limit : number = 10;
  @Input() header : any = [];
  @Input() totalItems : number = 100;
  @Input() pageChange : any = () => {};
  @Input() lazy : boolean = false;
  @ContentChild(TemplateRef, { static: false, descendants: false }) body !: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}

import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-toast-notify',
  templateUrl: './toast-notify.component.html',
  styleUrls: ['./toast-notify.component.css']
})
export class ToastNotifyComponent implements OnChanges{
  @Input() config !: any; // {severity, summary, detail,...}
  // this.bodyToast = {
  //   severity: CommonConstant.SUCCESS,
  //   summary: "Thành công",
  //   detail: "Thêm mới thành công"
  // }


  constructor(private messageService: MessageService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.config) {
      this.messageService.add({severity: this.config?.severity, summary: this.config?.summary, detail: this.config?.detail});
    }
  }
}

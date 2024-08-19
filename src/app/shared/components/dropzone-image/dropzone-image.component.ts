import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dropzone-image',
  templateUrl: './dropzone-image.component.html',
  styleUrls: ['./dropzone-image.component.css']
})
export class DropzoneImageComponent {
  @Input() files: File[] = [];
  @Input() title: string = "";
  @Input() width: string = "100%";
  @Input() height: string = "100%";
  @Input() max: number = 1;

  onSelect(event: any) {
    if (this.files.length < this.max) {
      console.log(event);
      this.files.push(...event.addedFiles);
    }
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}

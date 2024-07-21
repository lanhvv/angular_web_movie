import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-create-and-update',
  templateUrl: './create-and-update.component.html',
  styleUrls: ['./create-and-update.component.css']
})
export class CreateAndUpdateComponent implements OnInit{

  public name : string = "Thêm Mới";

  constructor(private routerActive: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.routerActive.snapshot.params?.["id"] ?? "";
    if (id.length > 0) {
      this.name = "Cập Nhập";
    }
  }

}

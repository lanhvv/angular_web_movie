import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {HostConstant} from "../../../../core/utils/host.constant";
import {MovieService} from "../../../../core/services/movie.service";

@Component({
  selector: 'app-create-and-update',
  templateUrl: './create-and-update.component.html',
  styleUrls: ['./create-and-update.component.css']
})
export class CreateAndUpdateComponent implements OnInit{
  protected readonly HostConstant = HostConstant;
  public name : string = "Thêm Mới";

  //toast-messsage
  public bodyToast: any;

  constructor(
    private routerActive: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.movieService.createMovie().subscribe((x: any) => console.log("hehhe"));
  }

  ngOnInit(): void {
    const id = this.routerActive.snapshot.params?.["id"] ?? "";
    if (id.length > 0) {
      this.name = "Cập Nhập";
    }
  }


}

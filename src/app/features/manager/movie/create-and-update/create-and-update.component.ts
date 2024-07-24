import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {ApiiNguoncService} from "../../../../core/services/apii-nguonc.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ParamAppiModel} from "../../../../core/models/param-appi.model";
import {HostConstant} from "../../../../core/utils/host.constant";

@Component({
  selector: 'app-create-and-update',
  templateUrl: './create-and-update.component.html',
  styleUrls: ['./create-and-update.component.css']
})
export class CreateAndUpdateComponent implements OnInit{
  protected readonly HostConstant = HostConstant;
  public name : string = "Thêm Mới";
  public formAppiNguonC : FormGroup;
  public moviesFromAppiNguonC !: any;
  public moviesFetchArr !: Array<any>;
  public headerMovieFromAppi !: any[];
  public totalItems : number = 100;

  constructor(
    private routerActive: ActivatedRoute,
    private apiiNguoncService: ApiiNguoncService
  ) {
    this.headerMovieFromAppi = ["","Tên Phim", "Năm", "Tổng Số Tập", "Tập Hiện Tại", "Thao tác"];
    this.moviesFetchArr = [];

    this.formAppiNguonC = new FormGroup({
      year: new FormControl(new Date()),
      type: new FormControl(""),
      category: new FormControl(""),
      search: new FormControl(""),
      country: new FormControl(""),
      limit: new FormControl(10),
      page: new FormControl(1)
    });
  }

  ngOnInit(): void {
    const id = this.routerActive.snapshot.params?.["id"] ?? "";
    if (id.length > 0) {
      this.name = "Cập Nhập";
    }
    this.getDataFormApiiNguonC();
  }

  private getDataFormApiiNguonC() {
    const param = new ParamAppiModel();
    param.year = (this.formAppiNguonC.get("year")?.value as Date)?.getFullYear();
    param.country = this.formAppiNguonC.get("country")?.value;
    param.type = this.formAppiNguonC.get("type")?.value;
    param.category = this.formAppiNguonC.get("category")?.value;
    param.search = this.formAppiNguonC.get("search")?.value;
    param.limit = this.formAppiNguonC.get("limit")?.value;
    param.page = this.formAppiNguonC.get("page")?.value;

    this.apiiNguoncService.getList(param).subscribe(
      (data: any) => {
      this.moviesFromAppiNguonC = data?.items ?? [];
      this.totalItems = data?.pagination?.totalItems ?? 100;
      debugger;
    },
    (error: any) => {
      console.error("Lỗi lấy dữ liệu từ Appi Nguồn C")
      this.moviesFromAppiNguonC = [];
    }
    );
  }

  public pageChangeApii() {
    return (event: any) => {
      const page = (event.first / event.rows) +  1;
      const limit = event.rows;
      this.formAppiNguonC.get("page")?.setValue(page);
      this.formAppiNguonC.get("limit")?.setValue(limit);
      this.getDataFormApiiNguonC();
      console.log("oke", event);
    }
  }

  public addMovieFetch(item: any) {
    if (this.moviesFetchArr.filter((x: any) => x?.slug == item?.slug)?.length > 0) {
      return;
    }
    this.moviesFetchArr.push(item);
  }

  public removeMovieFetch(index: number) {
    debugger
    this.moviesFetchArr.splice(index, 1);
  }

}

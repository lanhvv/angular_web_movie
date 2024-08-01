import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {ApiiNguoncService} from "../../../../core/services/apii-nguonc.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ParamAppiModel} from "../../../../core/models/param-appi.model";
import {HostConstant} from "../../../../core/utils/host.constant";
import {MovieService} from "../../../../core/services/movie.service";
import {ToastNotifyComponent} from "../../../../shared/components/toast-notify/toast-notify.component";
import {CommonConstant} from "../../../../core/utils/common.constant";

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

  //toast-messsage
  public bodyToast: any;

  constructor(
    private routerActive: ActivatedRoute,
    private apiiNguoncService: ApiiNguoncService,
    private movieService: MovieService
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
    this.moviesFetchArr.splice(index, 1);
  }

  public createMovieFetch() {
    const slugs = this.moviesFetchArr.map((x: any) => x?.slug);
    this.movieService.createMovie(slugs).subscribe(
      (response: any) => {
        this.moviesFetchArr = [];
        this.bodyToast = {
          severity: CommonConstant.SUCCESS,
          summary: "Thành công",
          detail: "Thêm mới thành công"
        }
      },
      (error: any) => {
        this.bodyToast = {
          severity: CommonConstant.ERROR,
          summary: "Thất bại",
          detail: "Thêm mới không thành công"
        }
      }
    );
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {HostConstant} from "../../../../core/utils/host.constant";
import {MovieService} from "../../../../core/services/movie.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-and-update',
  templateUrl: './create-and-update.component.html',
  styleUrls: ['./create-and-update.component.css']
})
export class CreateAndUpdateComponent implements OnInit{
  protected readonly HostConstant = HostConstant;
  public name : string = "Thêm Mới";
  public poster: File[] = [];
  public thumb: File[] = [];
  public form: FormGroup;

  //toast-messsage
  public bodyToast: any;

  constructor(
    private routerActive: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.form = new FormGroup(
      {
        name: new FormControl("", [Validators.required, Validators.maxLength(255)]),
        originName: new FormControl("", [Validators.required,Validators.maxLength(255)]),
        content: new FormControl("", [Validators.required, Validators.maxLength(500)]),
        episodeCurrent: new FormControl(0, [Validators.required, Validators.min(0)]),
        episodeTotal: new FormControl(0, [Validators.required, Validators.min(0)]),
        lang: new FormControl("", [Validators.required]),
        time: new FormControl(0, [Validators.required, Validators.min(0)]),
        date: new FormControl(new Date(), [Validators.required]),
        year: new FormControl(new Date().getFullYear(), [Validators.required]),
        actors: new FormControl([], [Validators.required]),
        category: new FormControl([], [Validators.required]),
        country: new FormControl([], [Validators.required]),
        director: new FormControl([], [Validators.required]),
        typeMovie: new FormControl("", [Validators.required])
      }
    );
  }

  ngOnInit(): void {
    const id = this.routerActive.snapshot.params?.["id"] ?? "";
    if (id.length > 0) {
      this.name = "Cập Nhập";
    }
  }


}

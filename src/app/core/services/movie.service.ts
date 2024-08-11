import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {HostConstant} from "../utils/host.constant";
import {Observable} from "rxjs";

@Injectable({providedIn:"root"})
export class MovieService {
  constructor(public httpClient: HttpClient) {
  }

  readonly path = "movie/";

  public createMovie() : Observable<any> {
    return  this.httpClient.post(HostConstant.BE + HostConstant.BE_PATH_COMMON + this.path + "create", null);
  }
}

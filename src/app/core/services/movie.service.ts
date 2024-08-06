import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {HostConstant} from "../utils/host.constant";
import {Observable} from "rxjs";

@Injectable({providedIn:"root"})
export class MovieService {
  constructor(public httpClient: HttpClient) {
  }

  readonly path = "movie/";

  public createMovie(slugs: string[]) : Observable<any> {
    return  this.httpClient.post(HostConstant.BE + HostConstant + this.path + "create", {slugs : slugs});
  }
}

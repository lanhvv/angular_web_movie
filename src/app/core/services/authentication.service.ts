import {Injectable, Injector} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "../models/login.model";
import {HostConstant} from "../utils/host.constant";

@Injectable({providedIn:"root"})
export class AuthenticationService {
  constructor(public httpClient: HttpClient) {
  }

  public login(email: string, password: string) {
    const login = {
      email: email,
      password: password
    }
    return this.httpClient.post<LoginModel>(HostConstant.BE + HostConstant.BE_PATH_COMMON +"login", login);
  }
}

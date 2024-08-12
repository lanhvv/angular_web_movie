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

  public register(email: string, name: string, password: string, role: string[]) {
    const register = {
      email: email,
      name: name,
      password: password,
      role: role
    }

    return this.httpClient.post(HostConstant.BE  + HostConstant.BE_PATH_COMMON + "register", register);
  }
}

import {Injectable, Injector} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "../models/login.model";

@Injectable({providedIn:"root"})
export class AuthenticationService {
  constructor(public httpClient: HttpClient) {
  }

  public login(email: string, password: string) {
    const login = {
      email: email,
      password: password
    }
    return this.httpClient.post<LoginModel>("http://localhost:8080/api/web_movie/v1.0/login", login);
  }
}

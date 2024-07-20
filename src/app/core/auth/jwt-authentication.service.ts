import {Injectable} from "@angular/core";

@Injectable({providedIn:"root"})
export class JwtAuthenticationService {
  constructor(
  ) {
  }

  public storageToken(token: string) {
    localStorage.setItem("token-jwt", token);
  }

  public retrieveToken() {
    return localStorage.getItem("token-jwt");
  }

  public clearToken() {
    localStorage.removeItem("token-jwt");
  }

}

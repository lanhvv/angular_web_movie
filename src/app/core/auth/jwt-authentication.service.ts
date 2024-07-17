import {Injectable} from "@angular/core";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({providedIn:"root"})
export class JwtAuthenticationService {
  constructor(
    private localStorage: LocalStorageService
  ) {
  }

  public storageToken(token: string) {
    this.localStorage.store("token-jwt", token);
  }

  public retrieveToken() {
    return this.localStorage.retrieve("token-jwt");
  }

  public clearToken() {
    this.localStorage.clear("token-jwt");
  }

  public storagePathPrev(path: string) {
    this.localStorage.store("path-prev", path);
  }

  public retrievePathPrev() {
    return this.localStorage.retrieve("path-rev");
  }

  public clearPathPrev() {
    return this.localStorage.clear("path-rev");
  }
}

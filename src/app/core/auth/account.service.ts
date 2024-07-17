import {Injectable} from "@angular/core";
import {LocalStorageService} from "ngx-webstorage";
import {LoginModel} from "../models/login.model";

@Injectable({providedIn:'root'})
export class AccountService {
  constructor(private localStorage: LocalStorageService) {
  }

  public storageAccount(account: LoginModel) {
    this.localStorage.store("account", account);
  }

  public retrieveAccount() {
    return this.localStorage.retrieve("account") as LoginModel;
  }

  public clearAccount() {
    this.localStorage.clear("account");
  }
}

import {Injectable} from "@angular/core";
import {LoginModel} from "../models/login.model";

@Injectable({providedIn:'root'})
export class AccountService {
  constructor() {
  }

  public storageAccount(account: LoginModel) {
    localStorage.setItem("account", JSON.stringify(account));
  }

  public retrieveAccount() {
    return JSON.parse(localStorage.getItem("account") ?? "");
  }

  public clearAccount() {
    localStorage.removeItem("account");
  }
}

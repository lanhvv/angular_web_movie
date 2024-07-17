import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AccountService} from "../auth/account.service";
import {CommonConstant} from "../utils/common.constant";
import {PathConstant} from "../utils/path.constant";
import {JwtAuthenticationService} from "../auth/jwt-authentication.service";

@Injectable({providedIn:'root'})
export class RoleAdminCacActiveChildGuard implements CanActivateChild{
  constructor(
    private accountService: AccountService,
    private jwtAuthentication: JwtAuthenticationService,
    private router: Router
  ) {
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const account = this.accountService.retrieveAccount();
    let isManager = false;
    for (let role of account.roles.keys()) {
      if (CommonConstant.ADMIN == role || CommonConstant.SYSTEM == role) {
        isManager = true;
      }
    }
    if (isManager) {
      return true;
    }
    this.jwtAuthentication.clearToken();
    this.accountService.clearAccount();
    this.router.navigate([PathConstant.LOGIN]);
    return false;
  }

}

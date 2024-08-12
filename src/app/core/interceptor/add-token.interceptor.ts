import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {JwtAuthenticationService} from "../auth/jwt-authentication.service";
import {Router} from "@angular/router";

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor{
  constructor(
    private jwtAuthentication: JwtAuthenticationService,
    private router: Router,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.jwtAuthentication.retrieveToken()) {
      req = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + this.jwtAuthentication.retrieveToken())});
    }
    return next.handle(req)
      .pipe(
        tap({
          error: (err: HttpErrorResponse) => {
            debugger
            if (err.status == 401) {
              this.jwtAuthentication.clearToken();
              this.router.navigate(["authentication", "login"]);
            }
          }
        })
      );
  }
}

import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtAuthenticationService} from "../auth/jwt-authentication.service";

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor{
  constructor(private jwtAuthentication: JwtAuthenticationService,) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.jwtAuthentication.retrieveToken()) {
      req = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + this.jwtAuthentication.retrieveToken())});
    }
    return next.handle(req);
  }
}

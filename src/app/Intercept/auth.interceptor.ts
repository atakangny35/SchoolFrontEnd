import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  decodedToken:any;
  tokenStorege :string="token";
  JwtHelper =new JwtHelperService();
  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    let token =localStorage.getItem('token');

    if(token!=null)
    {
      if(this.JwtHelper.isTokenExpired(token)  )
      { 
        this.router.navigate([""]);
      }
    }
    let newRequest: HttpRequest<any>;

    newRequest=request.clone({
      headers: request.headers.set('Authorization','Bearer '+token)
    });
   
    return next.handle(newRequest);
  }
}

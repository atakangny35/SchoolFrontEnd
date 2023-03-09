import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/Auth/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuradGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router,private toastr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isAuth())
      {
        
        return true;
      }
      else
      {
        this.router.navigate(["login"],{queryParams: {returnUrl:state.url}});
        this.toastr.warning("Session sonlanmıştır Lütfen tekrar giriş yapınız!");
        return false;
      }
    
  }
  
}

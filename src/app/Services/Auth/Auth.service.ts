import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/Model/LoginModel';
import { Observable } from 'rxjs';
import { TokenModel } from 'src/app/Model/TokenModel';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string="";
  tokenStaroge:string="token";
  decodedToken:any;
  Helper= new JwtHelperService()
constructor(private http:HttpClient,@Inject('url') private url:string, private router: Router,private toastr:ToastrService) { 

}
login(model:LoginModel){
  console.log(this.url+'Auth');
   this.http.post<TokenModel>(this.url+'auth',model).subscribe(next=>
    {
      localStorage.setItem('token',next.token);
         
          this.decodedToken=this.Helper.decodeToken(next.token);
          //console.log(this.decodedToken);
          this.router.navigate(['/home']);
          this.toastr.success("Giriş Başarılı","Hoş Geldiniz");
    }
    ,err=>{
            this.toastr.error(err.error,'Hata');
    });
}

isAuth(){
  
  return localStorage.getItem(this.tokenStaroge) ?true:false;
}

}

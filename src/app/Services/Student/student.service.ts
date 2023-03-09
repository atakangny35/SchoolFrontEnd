import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit{
  tokenStaroge:string="token";
  decodedToken:any;
  Helper= new JwtHelperService();
  constructor(private http:HttpClient,@Inject('url') private url:string, private router: Router,private toastr:ToastrService) { }
  ngOnInit(): void {
    this.GetDecodedToken();
    //console.log('decoded');
  }

  GetDecodedToken(){
    let token= localStorage.getItem('token') as string;
 
        this.decodedToken=this.Helper.decodeToken(token);   
  }

  GetStudentByClass(userid:number):Observable<any>
  { 
    //console.log(this.url+'User/GetStudentsByClasses?userid='+userid)
    return this.http.get(this.url+'User/GetStudentsByClasses?userid='+4);
     
  }
  
}

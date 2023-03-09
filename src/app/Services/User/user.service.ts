import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailModel } from 'src/app/Model/UserDetailModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,@Inject('url') private url:string) { }


  GetUserInformation(userid:string):Observable<UserDetailModel>{
    return this.http.get<UserDetailModel>(this.url+'User/getuserinfo?id='+userid);
  }

}

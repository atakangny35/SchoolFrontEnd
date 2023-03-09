import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../Services/Auth/Auth.service';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements  OnInit,AfterContentChecked{
 isAdmin:boolean=true;
 Helper= new JwtHelperService();
 decodedtoken:any;
 constructor(private authService :AuthService){ }

  ngAfterContentChecked(): void {
    
        if (this.decodedtoken==null){
      this.decodedtoken=this.authService.decodedToken;
      this.isUserAdmin();
        }
    

  }

 ngOnInit(): void {
 let token= localStorage.getItem('token');
 
  if(token!=null ){
    console.log('sds')
      this.decodedtoken=this.Helper.decodeToken(token);
      console.log(this.decodedtoken);
      this.isUserAdmin();
   
  }
 }


isUserAdmin(){
  this.decodedtoken.role =='Admin'? this.isAdmin= true:this.isAdmin=false;

  
}

 
  hasMessage(){
    return true;
  }
  
}

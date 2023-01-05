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
    

      this.decodedtoken=this.authService.decodedToken;
    

  }

 ngOnInit(): void {
 
  
 }




 
  hasMessage(){
    return true;
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth/Auth.service';
import { LoginModel } from 'src/app/Model/LoginModel';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginModel:LoginModel={};
  Helper= new JwtHelperService()
  decodedtoken :any;
 constructor(private authService:AuthService,private router:Router,private formBuilder:FormBuilder,private toastr:ToastrService,private spinner:NgxSpinnerService){}
 ngOnInit(): void {
  
  //this.spinner.show();
}


form= this.formBuilder.group
(

{"email":["",Validators.required],
 "password":["",Validators.required]

}

);

  login()
  {
    
    if(this.form.valid)
    {
      this.showSpinner();
      this.loginModel=Object.assign({},this.form.value) as LoginModel;
     
      this.authService.login(this.loginModel);   
       console.log(this.authService.decodedToken); 
        this.spinner.hide();
    }
    else{
      this.spinner.hide();
          this.toastr.warning("Form valid değil",'Hata');
    }
  }
  IsValid()
  {
     return this.form.valid?true:false;
  }
  showSpinner(){
    this.spinner.show();
  }
}

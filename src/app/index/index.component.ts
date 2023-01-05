import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../Model/LoginModel';
import { AuthService } from '../Services/Auth/Auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  loginmodel: LoginModel={email:'',password:''};
  constructor(private authService:AuthService){}

  ngOnInit(): void 
  {/*
    this.loginmodel.email="adminuser123@gmail.com";
    this.loginmodel.password="Admin123*";

    this.authService.login(this.loginmodel).subscribe(nexty=>{localStorage.setItem('token',nexty.token);console.log(nexty)},err=>{console.log(err.error)});
    */
  }
}

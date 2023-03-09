import { Component, OnInit,ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-responsive';
import 'datatables.net-buttons-bs4';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StudentService } from '../Services/Student/student.service';
import { ToastrService } from 'ngx-toastr';
import { ListOfUserListModel, UserListModel } from '../Model/UserListModel';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  decodedtoken: any;
  ListOfUserListModel: ListOfUserListModel[];
  Helper= new JwtHelperService()
  
constructor(private studentservice:StudentService,private toastr :ToastrService,private spinner :NgxSpinnerService)
{
  

}
  ngOnInit() {
    
    console.log('calıştı')
    console.log($('.classTable'))
    console.log(document.getElementsByClassName('.classTable'));
    $('.classTable').DataTable({
      responsive: true,
      lengthChange: false,
      autoWidth: false,
      scrollX:true
    });

    let token= localStorage.getItem('token') as string;

      this.decodedtoken=this.Helper.decodeToken(token);
    
      this.getStudentByClasses();
  
  }
  
  getStudentByClasses(){
    this.spinner.show();
      this.studentservice.GetStudentByClass(this.decodedtoken.nameid)
      .subscribe(next=>{this.ListOfUserListModel=next; this.hideSpinner();console.log(this.ListOfUserListModel)},
      err=>{
        this.toastr.error(err.error);
        this.spinner.hide();
      });
      //this.ngOnInit();
  }
  
  
 hideSpinner(){
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 500);
 }


}

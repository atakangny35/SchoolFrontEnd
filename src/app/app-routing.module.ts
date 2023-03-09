import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuradGuard } from './Guard/app-gurad.guard';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:IndexComponent,canActivate:[AppGuradGuard]},
  {path:'student',component:StudentComponent,canActivate:[AppGuradGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

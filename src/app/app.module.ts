import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Nav/navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { StudentComponent } from './student/student.component';
import { AuthInterceptor } from './Intercept/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({type:'ball-scale-multiple'}),
    ToastrModule.forRoot(
      {progressBar:true,
       closeButton:true}
    )
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide:'url',useValue:'https://localhost:7002/api/'},
  {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

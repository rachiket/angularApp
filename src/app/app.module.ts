import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { Router, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeRegisterComponent,
    ErrorComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
     // {path:"",component:AppComponent},
      {path:"emplist",component:EmployeeListComponent},
      {path:"register",component:EmployeeRegisterComponent},
      {path:"edit",component:EditComponent},
      {path:"**",component:ErrorComponent},
      
    ])
  ],
  providers: [ HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

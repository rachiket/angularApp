import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees;
  message: string;
  constructor(private service: EmployeeService,public router:Router) { }

  ngOnInit() 
  {
    console.log("Home Component Loaded")
    let resultstate=this.service.GetData();
    resultstate.subscribe((data)=>{
      this.employees = data;
    });


  }

  Delete(empNo)
  {
    let statusOfDelete=this.service.DeleteData(empNo);
    statusOfDelete.subscribe((result:any)=>
    {
      if(result.affectedRows>0)
      {
        this.router.navigate(['/home']);
      }
      else
      {
        this.message = "went wrong";
      }
    
    
    });
  }
}



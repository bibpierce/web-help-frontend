import { Component } from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  employee : Employee

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private employeeService : EmployeeService
  ) {
    this.employee = new Employee();
  }

  onSubmit(){
    this.employeeService.createEmployee(this.employee)
      .subscribe(result => this.goToEmployeeList())
  }

  goToEmployeeList(){
    this.router.navigate(['/url/employee/list'])
  }

}

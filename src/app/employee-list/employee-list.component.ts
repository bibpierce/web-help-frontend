import { Component } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees : Employee[];

  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }


}

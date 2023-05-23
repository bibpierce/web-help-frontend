import { Component } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-mui-employee-list',
  templateUrl: './mui-employee-list.component.html',
  styleUrls: ['./mui-employee-list.component.css']
})
export class MuiEmployeeListComponent {

  employees : Employee[];
  displayedColumns: string[] = ['id', 'employeeNumber', 'firstName' , 'middleName', 'lastName', 'department'];

  dataSource : any;

  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees)
      console.log(this.dataSource)
    })
  }

}

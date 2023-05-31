import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MuiEmployeeFormComponent} from "./mui-employee-form/mui-employee-form.component";
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Help Desk System';
  isCreate = true

  tempEmployee : Employee = {
    id : null,
    employeeNumber: 0,
    firstName : "",
    middleName : "",
    lastName : "",
    department : "",
    departmentId: 0,
    isChecked:false
  }

  public constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog) {
  }

  openCreateEmployeeDialog() {
    this.employeeService.isCreate = true;
    this.dialog.open(MuiEmployeeFormComponent, {
      data : this.tempEmployee
    });
  }

}

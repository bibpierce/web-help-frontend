import {Component, Inject} from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-mui-employee-form',
  templateUrl: './mui-employee-form.component.html',
  styleUrls: ['./mui-employee-form.component.css']
})
export class MuiEmployeeFormComponent {
  employeeDepartments = [
    { id : 0, value : "IT"},
    { id : 1, value : "HR"},
    { id : 2, value : "ADMIN"},
  ]

  isCreate = this.employeeService.isCreate;
  constructor(

    @Inject(MAT_DIALOG_DATA) public employee: Employee,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private employeeService: EmployeeService
  ) {}

  checkLog(){
    console.log(this.employee)
  }

  onRowUpdate() {
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      this.employee = data;
    })
  }

  onSubmit(){
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data))
  }


}

import {Component, Inject} from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../employee.service";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-mui-employee-form',
  templateUrl: './mui-employee-form.component.html',
  styleUrls: ['./mui-employee-form.component.css']
})
export class MuiEmployeeFormComponent {


  employee: Employee

  constructor(
    public dialogRef: MatDialogRef<MuiEmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employee = new Employee();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(result => this.goToEmployeeList())
  }

  goToEmployeeList() {
    this.router.navigate(['/url/employee/list'])
  }
}




import {Component, Inject} from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../employee.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {EmployeeFormComponent} from "../employee-form/employee-form.component";

@Component({
  selector: 'app-mui-employee-form',
  templateUrl: './mui-employee-form.component.html',
  styleUrls: ['./mui-employee-form.component.css']
})
export class MuiEmployeeFormComponent {


  employee: Employee

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employee = new Employee();
  }

  onSubmit() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(result => this.goToEmployeeList())
  }

  goToEmployeeList() {
    this.router.navigate(['/url/employee/list'])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        firstName: this.employee.firstName,
        middleName: this.employee.middleName,
        lastName: this.employee.lastName,
        department: this.employee.department}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.employee = result;
    });
  }
}

  export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}



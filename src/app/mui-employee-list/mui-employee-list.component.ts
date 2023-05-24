import { Component } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MuiEmployeeFormComponent} from "../mui-employee-form/mui-employee-form.component";

@Component({
  selector: 'app-mui-employee-list',
  templateUrl: './mui-employee-list.component.html',
  styleUrls: ['./mui-employee-list.component.css']
})
export class MuiEmployeeListComponent {

  employees : Employee[];
  displayedColumns: string[] = ['id', 'employeeNumber', 'firstName' , 'middleName', 'lastName', 'department', 'action'];

  dataSource : any;

  constructor(
    public dialog: MatDialog,
    private employeeService: EmployeeService) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MuiEmployeeFormComponent, {
      data: {employee: this.employees},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.employees = result;
    });
  }

  onDelete(employee : Employee){
    this.employeeService.deleteEmployee(employee).subscribe(data_ => {this.ngOnInit()})
  }
  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees)
      console.log(this.dataSource)
    })
  }

}

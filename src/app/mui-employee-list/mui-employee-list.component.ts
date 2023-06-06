import {Component} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {MuiEmployeeFormComponent} from "../mui-employee-form/mui-employee-form.component";

@Component({
  selector: 'app-mui-employee-list',
  templateUrl: './mui-employee-list.component.html',
  styleUrls: ['./mui-employee-list.component.css']
})
export class MuiEmployeeListComponent {

  employee: Employee;
  employees: Employee[];

  displayedColumns: string[] = ['id', 'employeeNumber', 'firstName', 'middleName', 'lastName', 'department', 'actions'];
  dataSource: any;

  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.getEmployeeList()
  }

  getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees)
      console.log(this.dataSource)
    })
  }


  onRowDeleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee).subscribe(_ =>
      this.ngOnInit());
  }

  openUpdateEmployeeDialog(employee: Employee) {
    this.employeeService.getEmployee(employee.id).subscribe(data => {
        this.employeeService.isCreate = false;
        this.employee = data;
        this.dialog.open(MuiEmployeeFormComponent, {
          data: this.employee
        })
      }
    )
  }
}

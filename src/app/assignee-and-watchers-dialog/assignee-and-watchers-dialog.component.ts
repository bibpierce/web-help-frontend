import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Ticket} from "../ticket";
import {TicketService} from "../ticket.service";
import {TempEmployee} from "../temp-employee";

@Component({
  selector: 'app-assignee-and-watchers-dialog',
  templateUrl: './assignee-and-watchers-dialog.component.html',
  styleUrls: ['./assignee-and-watchers-dialog.component.css']
})
export class AssigneeAndWatchersDialogComponent {

  allChecked: boolean = false;
  employees: TempEmployee[] = []
  assignedWatchers : number[] = []
  onRowTicket : Ticket
  assignedEmployee : Employee
  watchers: Employee[] = []

  constructor(
    private ticketService : TicketService,
    private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.onRowTicket = this.data.ticket;
    this.watchers = this.onRowTicket.ticketWatchers;

    this.assignedEmployee = this.employees.find(
      (employee: Employee) => employee.employeeNumber === this.onRowTicket.ticketAssignee?.employeeNumber
    )!;

    this.employees = this.data.employees.map((employee: Employee) => {
      const isChecked = this.watchers.some(
        (watcher: Employee) => watcher.employeeNumber === employee.employeeNumber
      );
      return {
        ...employee,
        isChecked: isChecked
      };
    });
  }

  updateAllChecked() {
    this.allChecked = this.employees != null && this.employees.every(e =>
      e.isChecked);

    this.watchers = this.employees.filter(e => e.isChecked);
  }

  handleAssignee() {
    const ticketNumber = this.onRowTicket.ticketNumber
    const assignee = this.assignedEmployee.employeeNumber
    this.employeeService.assignEmployee(ticketNumber, assignee).subscribe(_ => {
        console.log(ticketNumber);
        console.log(assignee)
      }
    )
  }

  handleAssignWatchers(){
    this.assignedWatchers = this.watchers.map(watcher => watcher.employeeNumber);

    const ticketNumber = this.onRowTicket.ticketNumber
    const employeeNumbers = this.assignedWatchers;

    this.ticketService.assignWatchers(ticketNumber, employeeNumbers).subscribe(_ => {
        console.log(employeeNumbers)
      }
    )
  }


  checkLog() {
    console.log(this.assignedWatchers)
  }

}

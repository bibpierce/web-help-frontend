import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MuiEmployeeFormComponent} from "./mui-employee-form/mui-employee-form.component";
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {Ticket} from "./ticket";
import {TicketService} from "./ticket.service";
import {MuiTicketListComponent} from "./mui-ticket-list/mui-ticket-list.component";
import {MuiTicketFormComponent} from "./mui-ticket-form/mui-ticket-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Help Desk System';

  tempEmployee : Employee = {
    id : null,
    employeeNumber: 0,
    firstName : "",
    middleName : "",
    lastName : "",
    department : null,
    departmentId: 0
  }

  tempTicket : Ticket = {
    ticketNumber : null,
    title : "",
    description : "",
    severity : null,
    status : null,
    ticketAssignee: null,
    ticketWatchers: []
  }

  public constructor(

    private  ticketService : TicketService,
    private employeeService: EmployeeService,
    public dialog: MatDialog) {
  }

  openCreateEmployeeDialog() {
    this.employeeService.isCreate = true;
    this.dialog.open(MuiEmployeeFormComponent, {
      data : this.tempEmployee
    });
  }

  openCreateTicketDialog() {
    this.ticketService.isCreate = true;


    this.dialog.open(MuiTicketFormComponent, {
      data : this.tempTicket
    });
  }

}

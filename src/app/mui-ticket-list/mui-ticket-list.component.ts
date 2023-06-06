import {Component} from '@angular/core';
import {Ticket} from "../ticket";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeService} from "../employee.service";
import {TicketService} from "../ticket.service";
import {MatTableDataSource} from "@angular/material/table";
import {
  AssigneeAndWatchersDialogComponent
} from "../assignee-and-watchers-dialog/assignee-and-watchers-dialog.component";
import {Employee} from "../employee";
import {MuiEmployeeFormComponent} from "../mui-employee-form/mui-employee-form.component";
import {MuiTicketFormComponent} from "../mui-ticket-form/mui-ticket-form.component";


@Component({
  selector: 'app-ticket-list',
  templateUrl: './mui-ticket-list.component.html',
  styleUrls: ['./mui-ticket-list.component.css']
})
export class MuiTicketListComponent {

  ticket: Ticket;
  tickets: Ticket[];
  employees: Employee[];
  displayedColumns: string[] = ['ticketNumber', 'title', 'description', 'severity', 'status', 'ticketAssignee', 'ticketWatchers', 'action']
  dataSource: any

  constructor(
    private dialog: MatDialog,
    private ticketService: TicketService,
    private employeeService: EmployeeService) {

  }

  assigneeAndWatcherDialog(ticket: Ticket) {
    this.ticketService.getTicket(ticket.ticketNumber).subscribe( data => {
      this.ticket = data;
      this.dialog.open(AssigneeAndWatchersDialogComponent, {
        data: {
          employees: this.employees,
          ticket: this.ticket
        }
      })
    })
  }

  ngOnInit() {
    this.getTicketList();
    this.getEmployeeList();
  }

  getTicketList() {
    this.ticketService.getTicketList().subscribe(data => {
      this.tickets = data;
      this.dataSource = new MatTableDataSource(this.tickets)
      console.log(this.dataSource)
    })
  }

  getEmployeeList() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }

  onRowDeleteTicket(ticket : Ticket){
    this.ticketService.deleteTicket(ticket).subscribe(_ =>
      this.ngOnInit())

  }

  openUpdateTicketDialog(ticket: Ticket) {
    this.ticketService.getTicket(ticket.ticketNumber).subscribe(data => {
        this.ticketService.isCreate = false;
        this.ticket = data;
        this.dialog.open(MuiTicketFormComponent, {
          data: this.ticket
        })
      }
    )
  }

}

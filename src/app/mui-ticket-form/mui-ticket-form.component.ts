import {Component, Inject} from '@angular/core';
import {Ticket} from "../ticket";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Employee} from "../employee";
import {TicketService} from "../ticket.service";
import {MuiTicketListComponent} from "../mui-ticket-list/mui-ticket-list.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mui-ticket-form',
  templateUrl: './mui-ticket-form.component.html',
  styleUrls: ['./mui-ticket-form.component.css']
})

export class MuiTicketFormComponent {

  isCreate = this.ticketService.isCreate;
  ticketStatus = [
    { id : 0, value : "CLOSED"},
    { id : 1, value : "NEW"},
    { id : 2, value : "ASSIGNED"},
    { id : 3, value : "IN_PROGRESS"}
  ]
  ticketSeverity = [
    { id : 0, value : "LOW"},
    { id : 1, value : "NORMAL"},
    { id : 2, value : "MAJOR"},
    { id : 3, value : "CRITICAL"}
  ]

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public ticket: Ticket,
    private ticketService : TicketService
  ) {
  }

  onRowTicketUpdate(){
    this.ticketService.updateTicket(this.ticket).subscribe(data =>
      this.ticket = data)
  }

  createTicket(){
    this.ticketService.createTicket(this.ticket).subscribe(result => {
      this.goToEmployeeList()
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/url/ticket/list'])
  }

}

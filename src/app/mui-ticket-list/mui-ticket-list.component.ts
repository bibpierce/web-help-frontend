import { Component } from '@angular/core';
import {Ticket} from "../ticket";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeService} from "../employee.service";
import {TicketService} from "../ticket.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './mui-ticket-list.component.html',
  styleUrls: ['./mui-ticket-list.component.css']
})
export class MuiTicketListComponent {

  ticket : Ticket;
  tickets : Ticket[];
  displayedColumns: string[] = ['ticketNumber', 'title', 'description', 'severity', 'status', 'ticketAssignee', 'ticketWatchers']
  dataSource: any

  constructor(
    private dialog: MatDialog,
    private ticketService: TicketService) {

  }

  ngOnInit(){
    this.getTicketList();
  }

  getTicketList(){
    this.ticketService.getTicketList().subscribe(data => {
      this.tickets = data;
      this.dataSource = new MatTableDataSource(this.tickets)
      console.log(this.dataSource)
    })
  }

}

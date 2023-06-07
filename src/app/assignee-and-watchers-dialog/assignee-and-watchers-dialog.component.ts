import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Ticket} from "../ticket";
import {TicketService} from "../ticket.service";
import {TempEmployee} from "../temp-employee";
import { Location } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-assignee-and-watchers-dialog',
  templateUrl: './assignee-and-watchers-dialog.component.html',
  styleUrls: ['./assignee-and-watchers-dialog.component.css']
})

export class AssigneeAndWatchersDialogComponent implements OnInit{

  allChecked: boolean = false;
  tempEmployees: TempEmployee[] = []
  employees : Employee[]
  assignedWatchers : number[] = []
  tickets : Ticket[]
  onRowTicket : Ticket
  assignedEmployee : Employee
  watchers: Employee[] = []

  constructor(
    private location : Location,
    private router : Router,
    private ticketService : TicketService,
    private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.onRowTicket = this.data.ticket;
    this.watchers = this.onRowTicket.ticketWatchers;
    this.employees = this.data.employees;

    this.assignedEmployee = this.employees.find(
      employee => employee.id === this.onRowTicket.ticketAssignee?.id
    )!;

    this.tempEmployees = this.data.employees.map((employee: Employee) => {
      const isChecked = this.watchers.some(
        (watcher: Employee) => watcher.employeeNumber === employee.employeeNumber
      );
      return {
        ...employee,
        isChecked: isChecked
      };
    });
  }

  ngOnInit() {
    this.ticketService.getTicketList().subscribe(tickets => this.tickets = tickets)
  }

  goBack(): void {
    this.location.back();
  }

  updateAllChecked() {
    this.allChecked = this.tempEmployees != null && this.tempEmployees.every(e =>
      e.isChecked);

    this.watchers = this.tempEmployees.filter(e => e.isChecked);
  }

  handleAssignee() {
    const ticketNumber = this.onRowTicket.ticketNumber
    const assignee = this.assignedEmployee.employeeNumber
    this.employeeService.assignEmployee(ticketNumber, assignee).subscribe(() => {
        this.goBack();
        this.navigateToTicketList();
        console.log(ticketNumber);
        console.log(this.assignedWatchers);
      }
    )
  }


  handleAssignWatchers(){
    this.assignedWatchers = this.watchers.map(watcher => watcher.employeeNumber);

    const ticketNumber = this.onRowTicket.ticketNumber
    const employeeNumbers = this.assignedWatchers;
    this.ticketService.assignWatchers(ticketNumber, employeeNumbers).subscribe(() => {
        this.navigateToTicketList();
        console.log(employeeNumbers)
      }
    )
  }

  navigateToTicketList(){
    this.router.navigate(['/', 'ticket-list']);
  }


  checkLog(){
    console.log(this.assignedEmployee)
  }


}

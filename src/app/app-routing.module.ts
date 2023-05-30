import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeFormComponent} from "./employee-form/employee-form.component";
import {MuiEmployeeListComponent} from "./mui-employee-list/mui-employee-list.component";
import {MuiTicketListComponent} from "./mui-ticket-list/mui-ticket-list.component";

const routes: Routes = [
  { path: 'employeeList', component: MuiEmployeeListComponent },
  { path: 'ticketList', component: MuiTicketListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

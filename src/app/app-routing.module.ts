import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MuiEmployeeListComponent} from "./mui-employee-list/mui-employee-list.component";
import {MuiTicketListComponent} from "./mui-ticket-list/mui-ticket-list.component";
import {
  AssigneeAndWatchersDialogComponent
} from "./assignee-and-watchers-dialog/assignee-and-watchers-dialog.component";

const routes: Routes = [
  { path: 'employee-list', component: MuiEmployeeListComponent },
  { path: 'ticket-list',
    component: MuiTicketListComponent,
    children: [{
      path: 'assignee-and-watchers',
      component: AssigneeAndWatchersDialogComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

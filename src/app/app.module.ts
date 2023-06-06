import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {EmployeeService} from "./employee.service";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MuiEmployeeListComponent} from './mui-employee-list/mui-employee-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MuiTicketListComponent} from './mui-ticket-list/mui-ticket-list.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MuiEmployeeFormComponent} from './mui-employee-form/mui-employee-form.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {
  AssigneeAndWatchersDialogComponent
} from './assignee-and-watchers-dialog/assignee-and-watchers-dialog.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MuiTicketFormComponent } from './mui-ticket-form/mui-ticket-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    MuiEmployeeListComponent,
    MuiTicketListComponent,
    MuiEmployeeFormComponent,
    AssigneeAndWatchersDialogComponent,
    MuiTicketFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

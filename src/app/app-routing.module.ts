import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeFormComponent} from "./employee-form/employee-form.component";
import {MuiEmployeeListComponent} from "./mui-employee-list/mui-employee-list.component";
import {MuiEmployeeFormComponent} from "./mui-employee-form/mui-employee-form.component";

const routes: Routes = [
  { path: 'list', component: MuiEmployeeListComponent },
  { path: 'create', component: MuiEmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

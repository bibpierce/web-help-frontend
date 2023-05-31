import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Employee} from "../employee";
import {Ticket} from "../ticket";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-assignee-and-watchers-dialog',
  templateUrl: './assignee-and-watchers-dialog.component.html',
  styleUrls: ['./assignee-and-watchers-dialog.component.css']
})
export class AssigneeAndWatchersDialogComponent {

  allChecked : boolean = false;
  employees : Employee[] = this.data.employees

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }


  updateAllChecked() {
    this.allChecked =  this.employees != null && this.employees.every(e =>
    e.isChecked);

  }

  checkLog(){
    console.log(this.data.employees)
  }

}

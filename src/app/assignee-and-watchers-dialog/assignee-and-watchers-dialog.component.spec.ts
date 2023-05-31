import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneeAndWatchersDialogComponent } from './assignee-and-watchers-dialog.component';

describe('AssigneeAndWatchersDialogComponent', () => {
  let component: AssigneeAndWatchersDialogComponent;
  let fixture: ComponentFixture<AssigneeAndWatchersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigneeAndWatchersDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigneeAndWatchersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

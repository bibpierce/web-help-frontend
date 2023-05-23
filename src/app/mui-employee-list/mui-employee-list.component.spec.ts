import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiEmployeeListComponent } from './mui-employee-list.component';

describe('MuiEmployeeListComponent', () => {
  let component: MuiEmployeeListComponent;
  let fixture: ComponentFixture<MuiEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuiEmployeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiEmployeeFormComponent } from './mui-employee-form.component';

describe('MuiEmployeeFormComponent', () => {
  let component: MuiEmployeeFormComponent;
  let fixture: ComponentFixture<MuiEmployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuiEmployeeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

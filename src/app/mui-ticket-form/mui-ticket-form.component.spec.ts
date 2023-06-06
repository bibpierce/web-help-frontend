import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTicketFormComponent } from './mui-ticket-form.component';

describe('MuiTicketFormComponent', () => {
  let component: MuiTicketFormComponent;
  let fixture: ComponentFixture<MuiTicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuiTicketFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

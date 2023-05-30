import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTicketListComponent } from './mui-ticket-list.component';

describe('TicketListComponent', () => {
  let component: MuiTicketListComponent;
  let fixture: ComponentFixture<MuiTicketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuiTicketListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

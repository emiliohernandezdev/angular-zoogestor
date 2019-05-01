import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAttendantsComponent } from './list-attendants.component';

describe('ListAttendantsComponent', () => {
  let component: ListAttendantsComponent;
  let fixture: ComponentFixture<ListAttendantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAttendantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAttendantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAttendantComponent } from './select-attendant.component';

describe('SelectAttendantComponent', () => {
  let component: SelectAttendantComponent;
  let fixture: ComponentFixture<SelectAttendantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAttendantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAttendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

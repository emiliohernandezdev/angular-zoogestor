import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalOptionsComponent } from './animal-options.component';

describe('AnimalOptionsComponent', () => {
  let component: AnimalOptionsComponent;
  let fixture: ComponentFixture<AnimalOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehallsComponent } from './createhalls.component';

describe('CreatehallsComponent', () => {
  let component: CreatehallsComponent;
  let fixture: ComponentFixture<CreatehallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatehallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatehallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

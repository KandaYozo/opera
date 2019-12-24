import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopcomComponent } from './popcom.component';

describe('PopcomComponent', () => {
  let component: PopcomComponent;
  let fixture: ComponentFixture<PopcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

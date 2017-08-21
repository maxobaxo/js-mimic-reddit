import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureisfuckinglitComponent } from './natureisfuckinglit.component';

describe('NatureisfuckinglitComponent', () => {
  let component: NatureisfuckinglitComponent;
  let fixture: ComponentFixture<NatureisfuckinglitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureisfuckinglitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureisfuckinglitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

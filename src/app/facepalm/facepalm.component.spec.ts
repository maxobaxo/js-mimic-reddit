import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacepalmComponent } from './facepalm.component';

describe('FacepalmComponent', () => {
  let component: FacepalmComponent;
  let fixture: ComponentFixture<FacepalmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacepalmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacepalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

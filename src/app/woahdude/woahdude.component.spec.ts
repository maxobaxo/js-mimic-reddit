import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoahdudeComponent } from './woahdude.component';

describe('WoahdudeComponent', () => {
  let component: WoahdudeComponent;
  let fixture: ComponentFixture<WoahdudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoahdudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoahdudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

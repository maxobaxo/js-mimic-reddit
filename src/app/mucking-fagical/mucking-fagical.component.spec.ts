import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuckingFagicalComponent } from './mucking-fagical.component';

describe('MuckingFagicalComponent', () => {
  let component: MuckingFagicalComponent;
  let fixture: ComponentFixture<MuckingFagicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuckingFagicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuckingFagicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

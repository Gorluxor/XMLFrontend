import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommmodationTypeComponent } from './accommmodation-type.component';

describe('AccommmodationTypeComponent', () => {
  let component: AccommmodationTypeComponent;
  let fixture: ComponentFixture<AccommmodationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommmodationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommmodationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

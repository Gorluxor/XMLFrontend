import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExtraServicesComponent } from './manage-extra-services.component';

describe('ManageExtraServicesComponent', () => {
  let component: ManageExtraServicesComponent;
  let fixture: ComponentFixture<ManageExtraServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExtraServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExtraServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccTypeComponent } from './manage-acc-type.component';

describe('ManageAccTypeComponent', () => {
  let component: ManageAccTypeComponent;
  let fixture: ComponentFixture<ManageAccTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAccTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAccTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

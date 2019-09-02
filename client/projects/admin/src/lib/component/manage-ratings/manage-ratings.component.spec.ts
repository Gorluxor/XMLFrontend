import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRatingsComponent } from './manage-ratings.component';

describe('ManageRatingsComponent', () => {
  let component: ManageRatingsComponent;
  let fixture: ComponentFixture<ManageRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupyUnitComponent } from './occupy-unit.component';

describe('OccupyUnitComponent', () => {
  let component: OccupyUnitComponent;
  let fixture: ComponentFixture<OccupyUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupyUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupyUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

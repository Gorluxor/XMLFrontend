import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondMessageComponent } from './respond-message.component';

describe('RespondMessageComponent', () => {
  let component: RespondMessageComponent;
  let fixture: ComponentFixture<RespondMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

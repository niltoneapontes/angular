import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenClosedComponent } from './open-closed.component';

describe('OpenClosedComponent', () => {
  let component: OpenClosedComponent;
  let fixture: ComponentFixture<OpenClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenClosedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

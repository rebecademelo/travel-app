import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditFlightComponent } from './create-edit-flight.component';

describe('CreateEditFlightComponent', () => {
  let component: CreateEditFlightComponent;
  let fixture: ComponentFixture<CreateEditFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

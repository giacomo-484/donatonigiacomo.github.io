import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonaraComponent } from './carbonara';

describe('Carbonara', () => {
  let component: CarbonaraComponent;
  let fixture: ComponentFixture<CarbonaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

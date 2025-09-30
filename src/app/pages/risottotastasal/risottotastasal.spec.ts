import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisottotastasalComponent } from './risottotastasal';

describe('Risottotastasal', () => {
  let component: RisottotastasalComponent;
  let fixture: ComponentFixture<RisottotastasalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RisottotastasalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisottotastasalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

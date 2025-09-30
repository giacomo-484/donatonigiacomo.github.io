import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzoccheriComponent } from './pizzoccheri';

describe('Pizzoccheri', () => {
  let component: PizzoccheriComponent;
  let fixture: ComponentFixture<PizzoccheriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzoccheriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzoccheriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

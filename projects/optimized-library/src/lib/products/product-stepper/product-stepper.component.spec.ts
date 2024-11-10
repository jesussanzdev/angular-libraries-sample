import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStepperComponent } from './product-stepper.component';

describe('ProductStepperComponent', () => {
  let component: ProductStepperComponent;
  let fixture: ComponentFixture<ProductStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListCarComponent } from './product-list-car.component';

describe('ProductListComponent', () => {
  let component: ProductListCarComponent;
  let fixture: ComponentFixture<ProductListCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListCarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

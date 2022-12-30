import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUnitOpenComponent } from './product-unit-open.component';

describe('ProductUnitOpenComponent', () => {
  let component: ProductUnitOpenComponent;
  let fixture: ComponentFixture<ProductUnitOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUnitOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductUnitOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

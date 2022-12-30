import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CudCategorySubcategoryComponent } from './cud-category-subcategory.component';

describe('CudCategorySubcategoryComponent', () => {
  let component: CudCategorySubcategoryComponent;
  let fixture: ComponentFixture<CudCategorySubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CudCategorySubcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CudCategorySubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

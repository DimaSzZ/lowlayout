import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CudCityComponent } from './cud-city.component';

describe('CudCityComponent', () => {
  let component: CudCityComponent;
  let fixture: ComponentFixture<CudCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CudCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CudCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

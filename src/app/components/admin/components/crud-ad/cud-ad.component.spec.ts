import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CudAdComponent } from './cud-ad.component';

describe('CudAdComponent', () => {
  let component: CudAdComponent;
  let fixture: ComponentFixture<CudAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CudAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CudAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

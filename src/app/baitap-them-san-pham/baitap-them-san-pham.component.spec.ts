import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapThemSanPhamComponent } from './baitap-them-san-pham.component';

describe('BaitapThemSanPhamComponent', () => {
  let component: BaitapThemSanPhamComponent;
  let fixture: ComponentFixture<BaitapThemSanPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapThemSanPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapThemSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

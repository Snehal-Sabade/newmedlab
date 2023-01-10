import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdealproductdetailComponent } from './topdealproductdetail.component';

describe('TopdealproductdetailComponent', () => {
  let component: TopdealproductdetailComponent;
  let fixture: ComponentFixture<TopdealproductdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopdealproductdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopdealproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

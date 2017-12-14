import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManaulFormComponent } from './order-manaul-form.component';

describe('OrderManaulFormComponent', () => {
  let component: OrderManaulFormComponent;
  let fixture: ComponentFixture<OrderManaulFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManaulFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManaulFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceWholesaleComponent } from './invoice-wholesale.component';

describe('InvoiceWholesaleComponent', () => {
  let component: InvoiceWholesaleComponent;
  let fixture: ComponentFixture<InvoiceWholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceWholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceWholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

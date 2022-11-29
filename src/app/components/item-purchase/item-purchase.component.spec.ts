import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPurchaseComponent } from './item-purchase.component';

describe('ItemPurchaseComponent', () => {
  let component: ItemPurchaseComponent;
  let fixture: ComponentFixture<ItemPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

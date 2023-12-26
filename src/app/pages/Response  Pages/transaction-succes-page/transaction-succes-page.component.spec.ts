import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSuccesPageComponent } from './transaction-succes-page.component';

describe('TransactionSuccesPageComponent', () => {
  let component: TransactionSuccesPageComponent;
  let fixture: ComponentFixture<TransactionSuccesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionSuccesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionSuccesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

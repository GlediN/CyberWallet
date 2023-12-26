import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFailedPageComponent } from './transaction-failed-page.component';

describe('TransactionFailedPageComponent', () => {
  let component: TransactionFailedPageComponent;
  let fixture: ComponentFixture<TransactionFailedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionFailedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionFailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

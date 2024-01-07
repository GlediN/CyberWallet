import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserBalanceComponent } from './edit-user-balance.component';

describe('EditUserBalanceComponent', () => {
  let component: EditUserBalanceComponent;
  let fixture: ComponentFixture<EditUserBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserBalanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUserBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

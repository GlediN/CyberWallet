import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSuccessPageComponent } from './signup-success-page.component';

describe('SignupSuccessPageComponent', () => {
  let component: SignupSuccessPageComponent;
  let fixture: ComponentFixture<SignupSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupSuccessPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

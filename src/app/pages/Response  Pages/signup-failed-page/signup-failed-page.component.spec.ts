import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFailedPageComponent } from './signup-failed-page.component';

describe('SignupFailedPageComponent', () => {
  let component: SignupFailedPageComponent;
  let fixture: ComponentFixture<SignupFailedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupFailedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupFailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

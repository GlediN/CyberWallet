import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFailedPageComponent } from './login-failed-page.component';

describe('LoginFailedPageComponent', () => {
  let component: LoginFailedPageComponent;
  let fixture: ComponentFixture<LoginFailedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFailedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginFailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

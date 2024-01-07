import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditingFailedComponent } from './user-editing-failed.component';

describe('UserEditingFailedComponent', () => {
  let component: UserEditingFailedComponent;
  let fixture: ComponentFixture<UserEditingFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserEditingFailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserEditingFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

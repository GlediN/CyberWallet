import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditedSuccesfullyPageComponent } from './user-edited-succesfully-page.component';

describe('UserEditedSuccesfullyPageComponent', () => {
  let component: UserEditedSuccesfullyPageComponent;
  let fixture: ComponentFixture<UserEditedSuccesfullyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserEditedSuccesfullyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserEditedSuccesfullyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

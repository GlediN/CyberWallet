import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameEditorComponent } from './user-name-editor.component';

describe('UserNameEditorComponent', () => {
  let component: UserNameEditorComponent;
  let fixture: ComponentFixture<UserNameEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserNameEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserNameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserEmailComponent } from './edit-user-email.component';

describe('EditUserEmailComponent', () => {
  let component: EditUserEmailComponent;
  let fixture: ComponentFixture<EditUserEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUserEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

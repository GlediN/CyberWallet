import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifcardGeneratorComponent } from './gifcard-generator.component';

describe('GifcardGeneratorComponent', () => {
  let component: GifcardGeneratorComponent;
  let fixture: ComponentFixture<GifcardGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifcardGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GifcardGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

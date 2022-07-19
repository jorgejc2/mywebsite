import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSequenceComponent } from './welcome-sequence.component';

describe('WelcomeSequenceComponent', () => {
  let component: WelcomeSequenceComponent;
  let fixture: ComponentFixture<WelcomeSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeSequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

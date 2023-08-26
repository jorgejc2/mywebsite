import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec420projectComponent } from './ec420project.component';

describe('Ec420projectComponent', () => {
  let component: Ec420projectComponent;
  let fixture: ComponentFixture<Ec420projectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ec420projectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec420projectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

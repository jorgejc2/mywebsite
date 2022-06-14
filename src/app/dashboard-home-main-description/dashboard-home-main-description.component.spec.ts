import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeMainDescriptionComponent } from './dashboard-home-main-description.component';

describe('DashboardHomeMainDescriptionComponent', () => {
  let component: DashboardHomeMainDescriptionComponent;
  let fixture: ComponentFixture<DashboardHomeMainDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHomeMainDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomeMainDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

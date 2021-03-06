import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTimelineComponent } from './dashboard-timeline.component';

describe('DashboardTimelineComponent', () => {
  let component: DashboardTimelineComponent;
  let fixture: ComponentFixture<DashboardTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

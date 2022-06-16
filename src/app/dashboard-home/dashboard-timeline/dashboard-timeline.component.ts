import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-timeline',
  templateUrl: './dashboard-timeline.component.html',
  styleUrls: ['./dashboard-timeline.component.scss']
})
export class DashboardTimelineComponent implements OnInit {

  @Input() value: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

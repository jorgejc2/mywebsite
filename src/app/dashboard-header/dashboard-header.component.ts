import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }
  // constructor() {}

  ngOnInit(): void {
  }

  navigateTo(el: string) {
    this.router.navigate(['/'], { fragment: el });
    return;
  }

}

import { ViewportScroller } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

declare var PR; // access PR global var set by Google code prettify script
@Component({
  selector: 'app-ec420project',
  templateUrl: './ec420project.component.html',
  styleUrls: ['./ec420project.component.scss']
})
export class Ec420projectComponent implements OnInit, AfterViewChecked {

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    /* re-prettify code after DOM has been rendered */
    PR.prettyPrint();
  }

  goProjects() {
    this.router.navigate(['/'], { fragment: "targetProject" });
  }

  goIntro(el: any) {
    this.viewportScroller.scrollToAnchor(el.id);
  }

}

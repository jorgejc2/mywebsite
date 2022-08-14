import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var PR; // access PR global var set by Google code prettify script
@Component({
  selector: 'app-dsp',
  templateUrl: './dsp.component.html',
  styleUrls: ['./dsp.component.scss']
})
export class DspComponent implements OnInit, AfterViewChecked {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    /* re-prettify code after DOM has rendered */
    PR.prettyPrint();
  }

  goProjects() {
    this.router.navigate(['/'], { fragment: "targetProject" });
  }

}

import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var PR;
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
    PR.prettyPrint();
  }

  goProjects() {
    this.router.navigate(['/'], { fragment: "targetProject" });
  }

}

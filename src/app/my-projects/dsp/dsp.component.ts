import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dsp',
  templateUrl: './dsp.component.html',
  styleUrls: ['./dsp.component.scss']
})
export class DspComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goProjects() {
    this.router.navigate(['/'], { fragment: "targetProject" });
  }

}

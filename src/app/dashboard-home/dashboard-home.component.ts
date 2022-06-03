import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor() {
    // delay(10000);
    // var fade_animation = document.querySelector('.starting_screen');
    // fade_animation.setAttribute("style", "-webkit-animation: fadeout 5s;")
    // fade_animation.setAttribute("style", "-moz-animation: fadeout 5s;")
    // fade_animation.setAttribute("style", "-ms-animation: fadeout 5s;")
    // fade_animation.setAttribute("style", "-o-animation: fadeout 5s;")
    // fade_animation.setAttribute("style", "animation: fadeout 5s;")
   }

  ngOnInit(): void {
  //   delay(10);
  //   var fade_animation = document.querySelector('.starting_screen');
  //   fade_animation.setAttribute("style", "-webkit-animation: fadeout 5s;")
  //   fade_animation.setAttribute("style", "-moz-animation: fadeout 5s;")
  //   fade_animation.setAttribute("style", "-ms-animation: fadeout 5s;")
  //   fade_animation.setAttribute("style", "-o-animation: fadeout 5s;")
  //   fade_animation.setAttribute("style", "animation: fadeout 5s;")
  }

}

function delay(ms: number){
  return new Promise( resolve => setTimeout(resolve, ms));
}
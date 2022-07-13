import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('fade', [

    // state('void', style({ opacity: 0, backgroundColor: 'black' })),
    // state('*', style({ opacity: 1, backgroundColor: 'pink' })),

    transition('void => *', [
      style({ background: 'black', opacity: 0 }),
      animate(2000),
    ]),

    transition('* => void', [
      
      animate(2000),
      style({ backgroundColor: 'black', opacity: 0 }),
    ])

  ])],
})
export class AppComponent implements OnInit {
  title = 'my-website';

  animationDone: boolean = false;
  homeVisible: boolean = false;

  constructor() { }

  async ngOnInit(): Promise<void> {
    console.log("awaiting promise");
    await new Promise( resolve => setTimeout(resolve, 3000));
    console.log("done awaiting");
    this.animationDone = true;

    /* since animation has a duration of 2000 ms, we need to delay setting
    the home components to be visible by 2000 ms */
    await new Promise( resolve => setTimeout(resolve, 2000));
    this.homeVisible = true;
    }

}
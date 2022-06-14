import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  events: any[] = [];
  constructor() {
   
   }

  async ngOnInit(): Promise<void> {
    this.events = [
      {content: 'Ordered', date: '15/02/2021 10:30', status: 'R'},
      {content: 'Processing', date: '15/02/2021 14:00', status: 'R'},
      {content: 'Shipped'},
      {content: 'Delivered'},
      {content: 'Ordered', date: '15/02/2021 10:30', status: 'R'},
      {content: 'Processing', date: '15/02/2021 14:00', status: 'R'},
      {content: 'Shipped'}
    ]
    await new Promise( resolve => setTimeout(resolve, 5000));
    console.log("delay finished")
    this.events[0]['status'] = ''
  }

}

function delay(ms: number){
  return new Promise( resolve => setTimeout(resolve, ms));
}
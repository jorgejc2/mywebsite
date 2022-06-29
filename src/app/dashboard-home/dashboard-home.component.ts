import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';


@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardHomeComponent implements OnInit {

  events: any[] = [];

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };



  // @ViewChild('newSwiper') newSwiper: any;

  constructor() {
   
   }

  ngOnInit(): void {
    SwiperCore.use([Navigation, Pagination])
    // this.events = [
    //   {content: 'Ordered', date: '15/02/2021 10:30', status: 'R'},
    //   {content: 'Processing', date: '15/02/2021 14:00', status: 'R'},
    //   {content: 'Shipped'},
    //   {content: 'Delivered'},
    //   {content: 'Ordered', date: '15/02/2021 10:30', status: 'R'},
    //   {content: 'Processing', date: '15/02/2021 14:00', status: 'R'},
    //   {content: 'Shipped'}
    // ]
    // await new Promise( resolve => setTimeout(resolve, 5000));
    // console.log("delay finished")
    // this.events[0]['status'] = ''

  }

  // ngAfterViewInit(): void {
  //   console.log(this.newSwiper.swiperRef);
  //   //Swiper instance will be displayed in console
  // }

  // onSwiper([swiper]) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }

}

function delay(ms: number){
  return new Promise( resolve => setTimeout(resolve, ms));
}
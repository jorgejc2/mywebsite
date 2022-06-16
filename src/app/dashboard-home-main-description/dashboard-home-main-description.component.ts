import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-dashboard-home-main-description',
  templateUrl: './dashboard-home-main-description.component.html',
  styleUrls: ['./dashboard-home-main-description.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardHomeMainDescriptionComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  @ViewChild('newSwiper') newSwiper: any;


  constructor() { }

  ngOnInit(): void {SwiperCore.use([Navigation, Pagination])}

  ngAfterViewInit(): void {
    console.log(this.newSwiper.swiperRef);
    //Swiper instance will be displayed in console
  }

  onSwiper([swiper]) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  

}

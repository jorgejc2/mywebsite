import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Parallax, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import { NONE_TYPE } from '@angular/compiler';
import Swiper from 'swiper/bundle';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-dashboard-home-main-description',
  templateUrl: './dashboard-home-main-description.component.html',
  styleUrls: ['./dashboard-home-main-description.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardHomeMainDescriptionComponent implements OnInit {

  config: SwiperOptions = {
    // slidesPerView: 1,
    // spaceBetween: 50,
    // navigation: true,
    // pagination: { clickable: true },
    // scrollbar: { draggable: true },
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  scroll: ScrollReveal;


  @ViewChild('newSwiper') newSwiper: any;


  constructor() {

  }

  ngOnInit(): void {SwiperCore.use([Navigation, Pagination, Parallax])
    const swiper = new Swiper(".mySwiper", {
      speed: 600,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }); 
    // this.scroll = new ScrollReveal(
    //   {
    //   reset: true,
    //   distance: '60px',
    //   duration: 2500, 
    //   delay: 400
    // });
    // console.log("scroller: " + this.scroll)
    // console.log(this.scroll.reveal)
    // this.scroll.reveal('.home-description-items', {
    //   // reset: true,
    //   distance: '60px',
    //   duration: 2500, 
    //   delay: 400, origin: 'left'});
  }

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

  // declare var swiper = new Swiper(".mySwiper", {
  //   speed: 600,
  //   parallax: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

  

  

}


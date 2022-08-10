import { AfterViewInit, Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import SwiperCore, { Navigation, Pagination, Parallax, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-dashboard-home-main-description',
  templateUrl: './dashboard-home-main-description.component.html',
  styleUrls: ['./dashboard-home-main-description.component.scss'],
  animations: [trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition('void <=> *', [
      animate(200),
    ]),

  ])],
  encapsulation: ViewEncapsulation.None,
})

export class DashboardHomeMainDescriptionComponent implements OnInit, AfterViewInit {

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

  slideshow_class_list = [
    'slideshow-one',
    'slideshow-two',
    'slideshow-three',
    'slideshow-four',
    'slideshow-five',
    'slideshow-six'
  ]
  slideshow_num: number = 0;

  timeline_visible: boolean = false;
  timeline_init: boolean = false;

  descExists: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // SwiperCore.use([Navigation, Pagination, Parallax])
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
  }

  ngAfterViewInit(): void {}

  prevSlideshowImg() {
    if (this.slideshow_num > 0) {
      this.slideshow_num--;
      console.log("Prev Clicked")
    }

    return;
  }

  nextSlideshowImg() {
    if (this.slideshow_num < this.slideshow_class_list.length - 1) {
      this.slideshow_num++;
      console.log("Next Clicked")
    }

    return;
  }

  toggleTimelineInfo() {
    this.timeline_visible = !this.timeline_visible;
    this.timeline_init = true;
    return;
  }

  onVisible(event: any) {
    console.log('visible event');
    console.log(event);
  }

  onCaret(event: any) {
    this.descExists = !this.descExists;
  }

}


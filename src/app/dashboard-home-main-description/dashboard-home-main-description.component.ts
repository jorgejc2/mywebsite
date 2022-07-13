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

  onVisible(event: any) {
    console.log('visible event');
    console.log(event);
  }

  onCaret(event: any) {
    this.descExists = !this.descExists;
  }

}


import { AfterViewInit, Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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

  scroll: ScrollReveal;
  numSteps = 20.0;
  boxElement;
  prevRatio = 0.0;
  increasingColor: string = "rgba(40, 40, 190, ratio)";
  decreasingColor: string = "rgba(190, 40, 40, ratio)";
  private observer: IntersectionObserver | undefined;
  // observer: any;


  // @ViewChild('newSwiper') newSwiper: any;

  createObserver(){

    let options = {
      root: null, 
      rootMargin: "0px",
      threshold: 1.0
    };

    this.observer = new IntersectionObserver(this.handleIntersect, options);
    this.observer.observe(this.boxElement);
  }

  handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > this.prevRatio) {
        entry.target.style.backgroundColor = "rbga(40, 40, 190, ratio)";
        console.log("In view");
      } else {
        entry.target.style.backgroundColor = "rgba(190, 40, 40, ratio)";
        console.log("Out view");
      }
  
      this.prevRatio = entry.intersectionRatio;
    });
  }


  constructor() {

  }

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
    // this.scroll = new ScrollReveal();
    // console.log(this.scroll)
    // this.scroll.reveal('.home-description-items',
    // {
    //   reset: true,
    //   distance: '60px',
    //   duration: 2500, 
    //   delay: 400
    // },);
    // let options = {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // const observer = new IntersectionObserver(this.callback, options);
    // const target = document.querySelector('#observed');
    // observer.observe(target);
    // this.createObserver();
    // this.scroll = new ScrollReveal(
    //   '.home-description',
    //   {
    //   reset: true,
    //   distance: '60px',
    //   duration: 2500, 
    //   delay: 400
    // });
    // console.log(ScrollReveal().version);
    // const scroller = new 
    // ScrollReveal().reveal('.swiper_div', {
    //   reset: true,
    //   distance: '60px',
    //   duration: 2500, 
    //   delay: 400, origin: 'left'}, 0);
    // console.log(scroller.isSupported());
  }

  // callback = (entries, observer) => {
  //   entries.forEach(entry=> {
  //     console.log(entry);
  //   });
  // }

  ngAfterViewInit(): void {
  }

  // onSwiper([swiper]) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }
  onVisible(event: any) {
    console.log('visible event');
    console.log(event);
  }

}


import { AfterViewInit, Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import SwiperCore, { Navigation, Pagination, Parallax, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';
import ScrollReveal from 'scrollreveal';

import { TimelineBox } from './timeline-box.model';

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

  timeline_box_list: TimelineBox[] = [
    new TimelineBox(0, "Computer Engineer", "Fall 2019", "Started college",
    "In the Fall of 2019, I started my journey as a computer engineer at the University of Illinois. I vividly remember how excited I "
    +"was being in a new environment and finally learning the basic concepts in my ECE 120 course.", 
    "../../assets/desc1.jpg"),
    new TimelineBox(1, "SHPE", "Fall 2019", "Joined as member", 
    "Worked on SHPE tech on ASL hand", 
    "none")
  ];

  timeline_box_selection: number = 0;

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

  toggleTimelineInfo(id: number) {
    this.timeline_visible = !this.timeline_visible;
    this.timeline_init = true;
    this.timeline_box_selection = id;
    return;
  }

  timelineGridPlacement(id: number) {
    /* format grid-column entry */
    let column_placement_num = id + 1;
    let column_placement_den = id + 2;
    let column: string = `${column_placement_num}/${column_placement_den}`

    /* decide if stem should be on top or bottom */
    if (id % 2 == 0) {
      return {'grid-row': "13/21", 'grid-column': column};
    }
    else {
      return {'grid-row': "21/29", 'grid-column': column};
    }
  }

  timelineBulbPlacement(id: number) {
    if (id % 2 == 0) {
      return {'top': "-10%"};
    }
    else {
      return {'bottom': "-10%"};
    }
  }

  timelineInfoPlacement(id: number) {
    if (id % 2 == 0) {
      return {'top': "-50%"};
    }
    else {
      return {'bottom': "-20%"};
    }
  }

  onVisible(event: any) {
    console.log('visible event');
    console.log(event);
  }

  onCaret(event: any) {
    this.descExists = !this.descExists;
  }

}


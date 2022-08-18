import { AfterViewInit, Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import SwiperCore, { Navigation, Pagination, Parallax, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';
import ScrollReveal from 'scrollreveal';

import { TimelineBox } from './timeline-box.model';
import { GalleryItem } from './gallery-item.model';
import { Router } from '@angular/router';

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

  project_names: string[] = ["Digital Signal Processing", "Coming Soon !!"];
  project_paths: string[] = ["/dsp", "/"]
  curr_project: number = 0; // used to select the project to be displayed in the 'project-content-info' div

  gallery_items: GalleryItem[] = [
    new GalleryItem(true, "chicago_bday_lunch.jpg", "Chicago bday lunch", "Getting lunch with friends in Chicago"),
    new GalleryItem(true, "first_internship_cointerns.jpg", "With Motorola interns", "With Motorola interns"),
    new GalleryItem(true, "moto_drone_tester.jpg", "Moto drone tester", "Testing out Motorola Solution's drone"),
    new GalleryItem(true, "drivein_movies.jpg", "drive in movies","drive in movies watching Pixar's Buzz Lightyear"),
    new GalleryItem(true, "bday_before_college.jpeg", "birthday before college", "Birthday before starting college", "object-fit: contain;"),
    new GalleryItem(false, undefined, undefined, undefined, "background-color: aqua;"),
    new GalleryItem(true, "chicago_planetarium_lakeside.jpg", "sitting on the lakeside of the Chicago planetarium", "sitting on the lakeside of the Chicago planetarium"),
    new GalleryItem(true, "drivein_movies_2.jpg", "drive in movie set up", "Waiting for Buzz Lightyear to start at the drive in movies"),
    new GalleryItem(true, "moto_chicago_trip_rooftop.jpg", "apartment rooftop view"),
    new GalleryItem(true, "chicago_marianos_rooftop.jpg", "Marianos Chicago rooftop", "Watching the sunset on top of the Mariano's parking garage"),
    new GalleryItem(true, "eceb_sunset.jpg", "eceb sunset", "A view of the sunset from one of the ECEB hallways"),
    new GalleryItem(true, "first_solarcar_meeting.jpg", "Solar Car Onboarding", "My first Solar Car meeting during the pandemic"),
    new GalleryItem(true, "asl_hand.jpg", "asl hand", "Programming the ASL hand in my dorm room", "object-fit: contain;"),
    new GalleryItem(true, "physics_iolab.jpg", "physics iolab", "The physics iolab devices used for labs. One of the physics labs is where I learned the z test which I used to identify signals in my 2022 summer internship with Motorola Solutions."),
    new GalleryItem(true, "lego_date.jpg", "lego date", "Building Lego roses with my girlfriend"),
    new GalleryItem(true, "ece120_lab.jpg", "ece120 lab", "Lab circuit for ECE 120. Basic lab powering LED's but the later lab was building a finite state machine for a vending machine."),
    new GalleryItem(true, "moto_chicago_inoffice.jpg", "Moto Chicago Office", "Working in the Moto Chicago office", "object-fit: contain;"),
    new GalleryItem(true, "lego_brickheadz.jpg", "lego brickheadz", "Building Lego Brickheadz that I bought with friends"),
    new GalleryItem(true, "isr_lobby.jpg", "isr lobby", "Lounging in the new ISR building sophomore year."),
    new GalleryItem(true, "loomis_outdoors.jpg", "outdoors at loomis", "Doing work outside the Loomis building on campus"),
    new GalleryItem(true, "dinner_potluck.jpg", "dinner potluck", "Having a small dinner potluck with some friends over the summer."),
    new GalleryItem(false, undefined, undefined, undefined, "background-color: green;"),
    new GalleryItem(true, "uiuc_quad_night.jpg", "nighttime at uiuc", "Reading at the quad at night"),
    new GalleryItem(true, "garage_rooftop_photoshoot.jpg", "Working in Moto Chicago office", "Doing work with other interns in the Motorola Chicago office.", "object-fit: contain;"),
    new GalleryItem(true, "batterybox_connectors.jpg", "battery box connectors 1", "Designing the battery box connectors for the solar car"),
    new GalleryItem(true, "batterybox_connectors_2.jpg", "battery box connectors 2", "Fitting the 3D printed battery box connectors onto the car."),
    new GalleryItem(true, "dorm_halloween.jpg", "dorm halloween", "Dressing up for halloween in the dorms and later watching a movie with friends."),
    new GalleryItem(false, undefined, undefined, undefined, "background-color: orange;"),
    new GalleryItem(true, "winter_covid.jpg", "covid winter break", "Catching Covid during winter break so I just quarantined and played Minecraft."),
    new GalleryItem(true, "moto_chicago_lakesideshore.jpg", "chicago lakeshore", "A view of the Chicago Lakeshore with other interns"),
    new GalleryItem(true, "classes_outside.jpg", "classes outside", "taking virtual classes outside on the quad"),
    new GalleryItem(true, "bourbanaise_sunet.jpg", "sunset in bourbanaise", "Catching the sunset with a friend after going for a walk in the park"),
    new GalleryItem(true, "mika_sushi_date.jpg", "sushi date", "Sushi date with my girlfriend in St Louis", "object-position: 50% 20%;"),
    new GalleryItem(true, "quad_reading.jpg", "reading on the quad", "reading This Little Life on the quad"),
    new GalleryItem(true, "pumpkin_carving.jpg", "pumpkin carving night", "Carving pumpkins with friends during the Halloween season."),
    new GalleryItem(true, "babyyodas_studysession.jpg", "baby yoda study session", "Finding Baby yodas at Costco for $20 so we bought a few"), 
    new GalleryItem(false, undefined, undefined, undefined, "background-color: aqua;"),
    new GalleryItem(true, "brian_photographing.jpg", "brian taking pictures", "Walking in Tom Ping park in Chicago while Brian tries his new camera."),
    new GalleryItem(true, "dormroom_sunset.jpg", "sunset in the dorm room", "Watching the sunset from my dorm room")
  ]

  currGalleryItem: GalleryItem;

  displayGallery: boolean = false;

  descExists: boolean = false;

  constructor(private router: Router) {}

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

  prevProject() {
    if (this.curr_project > 0) {
      this.curr_project--;
    }
    return;
  }

  nextProject() {
    if (this.curr_project < this.project_names.length - 1) {
      this.curr_project++;
    }
    return;
  }

  navigateProject() {
    let path = `${this.project_paths[this.curr_project]}`;
    this.router.navigate([path]);
  }

  imgDetails(idx: number) {
    if (this.gallery_items[idx].image) {
      this.currGalleryItem = this.gallery_items[idx]
    }
  }
  
  exitImgDetails() {
    this.currGalleryItem = undefined;
  }

  showGallery() {
    this.displayGallery = true;
  }

}


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
    "SHPE is short for the Society of Hispanic Professional Engineers. When I first joined this organization, I mainly participated in the community service events. " +
    "One of the community service events we did was bringing awareness and fundraising for the homeless population in the Urbana Champaign local area. " +
    "Eventually, I transitioned to a branch of the organization called SHPE tech which gave members an outlet to be creative and come up with an engineering idea that other " +
    "members of SHPE could have work on. In my case, I joined a project at the time that involved putting together a mechanically programmable hand that was meant " +
    "to translate words to ASL or American Sign Language. I was immediatly put as the lead of the electrical engineering team where I created the code base in C++ and programmed " +
    "Arduino motors to move the fingers and joints of the hand. ", 
    "none"), 
    new TimelineBox(2, "Illini Solar Car", "Fall 2020", "Joined as mechanical member",
    "I joined as a mechanical member of the team and contributed by helping design and 3D print the air intake plug for the car as well " +
    "the battery box connectors. The air intake plug was more of a filter to be inserted to the bottom of the car so that it could filter " +
    "out debris while still bringing in air to cool down the battery box of the car. The battery box connectors were the connections between the " + 
    "the battery box and the power distribution system. Both of these parts were designed and 3D printed using Creo."
    , "none"),
    new TimelineBox(3, "Physics Learning Assistant", "Spring 2021", "Became an LA for Physics 100", 
    "As a physics learning assistant, i worked alongside other teaching assistants as well as Professor Morton to help delegate " +
    "discussions in Physics 100. In a typical discussion lab, the TA would do a quick conceptual review in the first five minutes, " +
    "and afterwards we would break the class up into groups. It was my role then to go to every group and try and help facilitate communication and ideas "+
    "so that every student could engage with the material.",
    "none"),
    new TimelineBox(4, "Motorola Solutions Intern", "Summer 2021", "Software Engineering Internship", 
    "I began my first internship with Motorola Solutions where I primarily worked on a backend database for a project called the " +
    "Application Status Portal. This web application showed the status of all the online services that Command Central suite provides. " +
    "Command Central is the umbrella name for all the safety products that Motorola Solutions offers to first responders. " +
    "I learned MySQL in order to manage the database with other interns and make sure that ",
    "none"),
    new TimelineBox(5, "Illini Solar Car", "Fall 2021", "Treasurer", 
    "I became the treasuer for Illini Solar Car and managed their financial resources using QuikBooks and revised purchase requests for " +
    "other members of the team. ",
    "none"),
    new TimelineBox(6, "Motorola Solutions Co-op", "Spring 2022", "Software Engineering Internship", 
    "I returned to Motorola Solutions as a part time intern during the school semester and worked as a full stack developer. " +
    "The name of the project was Recruiting Reimagined which was a web application creating using Angular to provide a clean solution " +
    "to Motorola Solution recruiters where they could manage potential candidates and collect resumes and information. " + 
    "My biggest contributions was creating the candidate page which is where a candidate would be directed towards after scanning a QR code " +
    "on their phone. The page would collect information from the user as well as their resume and send it to our backend database system so that" +
    "it was available for recruiters to view. I also created the recruiter page where recruiters could be added to the database and tied to a career fair " +
    "event. The role of the recruiter was also included so that they could be better matched with a candidate depending on the role they were" +
    "potentially interested in. This role gave me the basic introduction and resources to web application development and immediately inspired me " +
    "to create this website portfolio and other Angular applications that I will be uploading soon.",
    "none"),
    new TimelineBox(7, "Motorola Solutions Intern", "Summer 2022", "Embedded Systems Intern",
    "I returned for a third internship with Motorola Solutions where I got invaluable embedded systems and digital signal processing " +
    "experience. I was tasked with creating a 'learning' module for a software defined radion that controlled the radio to listen to radio " +
    "frequency activity for hours on end, and then process and characterize the signals it recorded in those hours. Characterization involed " +
    "listing the different signals that were found and their frequencies, their amplitude, their bandwidth, and their pattern of life. " +
    "Processing the signals especially was the most interesting part of the project to me because it required me to do research and solidify my understanding " +
    "of digital signal processing while also using data structures to better manage the memory resources of the radio since it was very limited. " +
    "You can learn more details about this project and my key takeaways in the project section below.",
    "none"),
    new TimelineBox(8, "Senior", "Fall 2022", "",
    "As I begin my last year of my undergrad, I look forward to classes that I'm taking such as machine learning, applied parallel programming, " +
    "the principles of safe autonomy, and computer architecture. By this point, I feel proud of all the experience I've been able to gain when in the "+
    ", I started off as a freshman who had never coded before. I am more focused on side projects and hope to be able to share them on this " +
    "website very soon.",
    "none")

  ];

  timeline_box_selection: number = 0;

  project_names: string[] = ["Digital Signal Processing", "Coming Soon !!"];
  project_paths: string[] = ["/dsp", "/"]
  curr_project: number = 0; // used to select the project to be displayed in the 'project-content-info' div

  gallery_items: GalleryItem[] = [
    new GalleryItem(true, "chicago_bday_lunch.jpg", "Chicago bday lunch", "The day after my birthday, me and friends went to the Fulton Time Market to get lunch."),
    new GalleryItem(true, "first_internship_cointerns.jpg", "With Motorola interns", "This was during the last week of my first summer internship with Motorola Solutions. " +
    "This is the intern team I worked with on the Application Status Portal. Unforunately I couldn't get a picture of the full time software developers we worked with " +
    "because they were based in Krakow, Poland, but the entire group was amazing to work with!"),
    new GalleryItem(true, "moto_drone_tester.jpg", "Moto drone tester", "At the Applied Technology department of Motorola Solutions, this drone is often used to help test " +
    "a lot of radios and products that will be on the move or airborne. Me and another intern were helping calibrate and testing this drone before it was to be loaded with " +
    "cargo to test."),
    new GalleryItem(true, "drivein_movies.jpg", "drive in movies","I love going to the Harvest Drive In movie theater which is 30 minutes away from campus. This time around, " +
    "we went to go see the new Buzz Lightyear movie by Pixar."),
    new GalleryItem(true, "bday_before_college.jpeg", "birthday before college", "This is my 18th birthday that I celebrated with friends before I started college. " +
    "To my surprise, my parents brought out an Illini themed cake for me.", "object-fit: contain;"),
    new GalleryItem(false, undefined, undefined, undefined, "background-color: aqua;"),
    new GalleryItem(true, "chicago_planetarium_lakeside.jpg", "sitting on the lakeside of the Chicago planetarium", "This is one of my favorite spots in Chicago " +
    "which is the lake side of the planetarium. Me and friends rested here and got a nice view of the city after long boarding the entire day."),
    new GalleryItem(true, "drivein_movies_2.jpg", "drive in movie set up", "Waiting for Buzz Lightyear to start at the drive in movies. This shows one of the reasons " +
    "I love the drive in movies because the movie is about the start and the sunset is so beautiful. It looks especially beautiful when its darker because the view of movie " +
    "is encompassed by all the stars in the sky above."),
    new GalleryItem(true, "moto_chicago_trip_rooftop.jpg", "chicago apartment rooftop", "The night before me and other Motorola interns were going to work in the Chicago office, we went to one of the intern's " +
    "apartment and took in the city from the public park on the side of the building. "),
    new GalleryItem(true, "chicago_marianos_rooftop.jpg", "Marianos Chicago rooftop", "This is another spot that I love in Chicago that I found off of TikTok video. " +
    "Me and some friends bike'd here to see how the view was, and sure enough, we got a beautiful sunset of the city."),
    new GalleryItem(true, "eceb_sunset.jpg", "eceb sunset", "A view of the sunset from one of the ECEB hallways. These views definitely kept me sane as I worked long hours on the ECE 391 Linux kernel."),
    new GalleryItem(true, "first_solarcar_meeting.jpg", "Solar Car Onboarding", "My first Solar Car meeting during the pandemic. The entire year, our meetings were virtual."),
    new GalleryItem(true, "asl_hand.jpg", "asl hand", "I took the ASL hand from SHPE home for a week and got to program and test some basic hand movement. Here I labeled all the servo motors "
    +"so that it was easier to keep track of what motors I was moving.", "object-fit: contain;"),
    new GalleryItem(true, "physics_iolab.jpg", "physics iolab", "The physics iolab devices used for labs. One of the physics labs is where I learned the z test which I used to identify signals in my 2022 summer internship with Motorola Solutions."),
    new GalleryItem(true, "lego_date.jpg", "lego date", "Building Lego roses with my girlfriend :)"),
    new GalleryItem(true, "ece120_lab.jpg", "ece120 lab", "Lab circuit for ECE 120. Basic lab powering LED's but the later lab was building a finite state machine for a vending machine."),
    new GalleryItem(true, "moto_chicago_inoffice.jpg", "Moto Chicago Office", "Working in the Moto Chicago office with the other interns. ", "object-fit: contain;"),
    new GalleryItem(true, "lego_brickheadz.jpg", "lego brickheadz", "Building Lego Brickheadz that I bought with friends. I place them with my other collectibles on a shelf in my room." +
    "So far, a lot of those collectibles are Legos."),
    new GalleryItem(true, "isr_lobby.jpg", "isr lobby", "Lounging in the new ISR building sophomore year."),
    new GalleryItem(true, "loomis_outdoors.jpg", "outdoors at loomis", "Doing work outside the Loomis building on campus. There are a few spots on campus that have a nice view like this "+
    "where I like to do work."),
    new GalleryItem(true, "dinner_potluck.jpg", "dinner potluck", "Having a small dinner potluck with some friends over the summer."),
    new GalleryItem(false, undefined, undefined, undefined, "background-color: green;"),
    new GalleryItem(true, "uiuc_quad_night.jpg", "nighttime at uiuc", "I sometimes like to walk around campus at night, especially the main quad, and star gaze. Since the campus can be so busy during " +
    "the day, its definitely nice getting some peace and quiet at night."),
    new GalleryItem(true, "garage_rooftop_photoshoot.jpg", "Rooftop photoshoot", "During a spontaneous Chicago trip with friends I made at the dorms, we found a nice parking garage "
    + "where we then decided to do a little photoshoot. I had these outdoor color changing lights from Costco and added it to the photoshoot. In the picture are my friends, Miguel and Daisy.", "object-fit: contain;"),
    new GalleryItem(true, "batterybox_connectors.jpg", "battery box connectors 1", "Me and another member worked together on measuring the dimensions of the battery box connectors and " +
    "finding a solution to snuggly fit them on the side of the battery box. Here we are using Creo to create our design."),
    new GalleryItem(true, "batterybox_connectors_2.jpg", "battery box connectors 2", "Here we had our first prototype which was already really promising. One of the connectors fit very snuggly " +
    "which was important since we didn't want to connectors slipping from the battery box at all."),
    new GalleryItem(true, "dorm_halloween.jpg", "dorm halloween", "Even though there were no Halloween events happening because of the Covid lockdown, me and friends from my dorm " +
    "floor decided to dress up anyways and watch a movie in one of our rooms. It was definitely a memorable Halloween with close friends."),
    new GalleryItem(false, undefined, undefined, undefined, "background-color: orange;"),
    new GalleryItem(true, "winter_covid.jpg", "covid winter break", "I unfortunately caught Covid during the winter break leading into 2022, so I spent two weeks recovering from Covid " +
    "and a difficult semester of classes. I found myself picking up Minecraft after years because I love using it as a creative outlet to have fun and connect with my friends online."),
    new GalleryItem(true, "moto_chicago_lakesideshore.jpg", "chicago lakeshore", "Me and our group of Motorola interns walked along the Lakeshore after going to the interactive " +
    "Van Gogh exhibit. We latered revisited this area at night and had fun on the beach."),
    new GalleryItem(true, "classes_outside.jpg", "classes outside", "I sometimes liked to take my virtual classes outside on the main quad to catch a breath of " +
    "fresh air. Being outside always relaxes me and clears my mind."),
    new GalleryItem(true, "bourbanaise_sunet.jpg", "sunset in bourbanaise", "Me and my close friend Brian caught a sunset near his house after going to the park. We felt a sense of "+
    "euphoria since not only was the sunset so beautiful, but we also witnessed a double rainbow for the first time. It was completely unexpected since before this, it rained really hard " +
    "when we were at the park."),
    new GalleryItem(true, "mika_sushi_date.jpg", "sushi date", "Sushi date with my girlfriend in St Louis.", "object-position: 50% 20%;"),
    new GalleryItem(true, "quad_reading.jpg", "reading on the quad", "Reading at the quad at night. The book I was reading was called 'This Little Life' which is a very sad book, but " +
    "I highly recommend it. This night was the summer of 2021, and I remember feeling calm and at peace as I finally witnessed liveliness on the Campus since the school went virtual for classes. "),
    new GalleryItem(true, "pumpkin_carving.jpg", "pumpkin carving night", "Me and my friends love doing festival activities which in this case, was some pumpkin carving. " +
    "We also went to a haunted house together the weekend after."),
    new GalleryItem(true, "babyyodas_studysession.jpg", "baby yoda study session", "Me and my roommates went a little overboard with the Baby Yodas, espcially after discovering the " +
    "big plushy versions were only $20 at Costco."), 
    new GalleryItem(false, undefined, undefined, undefined, "background-color: aqua;"),
    new GalleryItem(true, "brian_photographing.jpg", "brian taking pictures", "Here me and Brian are walking through Ping Tom park which Brian uses his new digital camera. "
    +"Often we found ourselves skating through the city and taking lots of pictures. "),
    new GalleryItem(true, "dormroom_sunset.jpg", "sunset in the dorm room", "I will always miss the dorm rooms from sophomore year because my friends were close by and " +
    "I got the perfect view of the sunset every single night.")
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
    // this.timeline_visible = !this.timeline_visible;
    this.timeline_visible = true;
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


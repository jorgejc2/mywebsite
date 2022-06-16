import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular'

import { AppComponent } from './app.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardTimelineComponent } from './dashboard-home/dashboard-timeline/dashboard-timeline.component';
import { DashboardHomeMainDescriptionComponent } from './dashboard-home-main-description/dashboard-home-main-description.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHomeComponent,
    DashboardTimelineComponent,
    DashboardHomeMainDescriptionComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

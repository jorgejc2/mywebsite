import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SwiperModule } from 'swiper/angular'

import { AppComponent } from './app.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardTimelineComponent } from './dashboard-home/dashboard-timeline/dashboard-timeline.component';
import { DashboardHomeMainDescriptionComponent } from './dashboard-home-main-description/dashboard-home-main-description.component';
import { ImgDimDirective } from './img-dim.directive';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { ObserveVisibilityDirective } from './observe-visibility.directive';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { WelcomeSequenceComponent } from './welcome-sequence/welcome-sequence.component';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { DspComponent } from './my-projects/dsp/dsp.component';

const appRoutes: Routes = [
  { path: '', component: DashboardHomeMainDescriptionComponent },
  { path: 'projects', component: MyProjectsComponent, children: [
    { path: 'dsp', component: DspComponent }
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardHomeComponent,
    DashboardTimelineComponent,
    DashboardHomeMainDescriptionComponent,
    ImgDimDirective,
    ObserveVisibilityDirective,
    DashboardHeaderComponent,
    WelcomeSequenceComponent,
    MyProjectsComponent,
    DspComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule,
    NgsRevealModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

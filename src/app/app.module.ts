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
import { RouterModule, Routes, ExtraOptions, Router, Scroll } from '@angular/router';
import { DspComponent } from './my-projects/dsp/dsp.component';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { Ec420projectComponent } from './my-projects/ec420project/ec420project.component';

const appRoutes: Routes = [
  { path: '', component: DashboardHomeMainDescriptionComponent },
  { path: 'dsp', component: DspComponent },
  { path: 'ece420finalproject', component: Ec420projectComponent }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  useHash: true
};

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
    DspComponent,
    DashboardFooterComponent,
    Ec420projectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule,
    NgsRevealModule,
    RouterModule.forRoot(appRoutes,
      routerOptions
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 75]);
    router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: Scroll) => {
      if (e.anchor) {
        // anchor navigation
        /* setTimeout is the core line to solve the solution */
        setTimeout(() => {
          viewportScroller.scrollToAnchor(e.anchor);
        })
      } else if (e.position) {
        // backward navigation
        viewportScroller.scrollToPosition(e.position);
      } else {
        // forward navigation
        viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

}

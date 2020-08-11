import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTestComponent } from './first-test/first-test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeadertitleComponent } from './headertitle/headertitle.component';
import { TempledataComponent } from './templedata/templedata.component';
import { MyserviceService } from './myservice.service';
import { AboutusdataComponent } from './aboutusdata/aboutusdata.component';
import { CoupondataComponent } from './coupondata/coupondata.component';
import { BananaleafComponent } from './bananaleaf/bananaleaf.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { OutsidedataComponent } from './outsidedata/outsidedata.component';
import { HomefooddataComponent } from './homefooddata/homefooddata.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponent,
    SidebarComponent,
    FooterComponent,
    HeadertitleComponent,
    TempledataComponent,
    AboutusdataComponent,
    CoupondataComponent,
    BananaleafComponent,
    OutsidedataComponent,
    HomefooddataComponent
  ],
  imports: [
    BrowserModule,
    NgxYoutubePlayerModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

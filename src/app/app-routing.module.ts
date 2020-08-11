import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempledataComponent } from './templedata/templedata.component';
import { AboutusdataComponent } from './aboutusdata/aboutusdata.component';
import { CoupondataComponent } from './coupondata/coupondata.component';
import { BananaleafComponent } from './bananaleaf/bananaleaf.component';
import { OutsidedataComponent } from './outsidedata/outsidedata.component';
import { HomefooddataComponent } from './homefooddata/homefooddata.component';


const routes: Routes = [
  {'path': 'temple', component: TempledataComponent},
  {'path': 'home', component: AboutusdataComponent},
  {'path': 'coupondata', component: CoupondataComponent},
  {'path': 'meal', component: BananaleafComponent},
  {'path': 'outside', component: OutsidedataComponent},
  {'path': 'homefood', component: HomefooddataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

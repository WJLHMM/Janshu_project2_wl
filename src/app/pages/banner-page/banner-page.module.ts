import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BannerPageComponent } from './banner-page.component';
import { BannerPageRoute} from './banner-page.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BannerPageRoute)
  ],
  declarations: [
  	BannerPageComponent,
  ]
})
export class BannerPageModule { }

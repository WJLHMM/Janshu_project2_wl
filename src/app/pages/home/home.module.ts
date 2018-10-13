import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeRecommendlistComponent } from './home-recommendlist/home-recommendlist.component';
import { HomeContentlistComponent } from './home-contentlist/home-contentlist.component';
import { HomeBoardComponent } from './home-board/home-board.component';
import { HomeRecommendauthorsComponent } from './home-recommendauthors/home-recommendauthors.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeBoardComponent,
    HomeBannerComponent,
    HomeContentlistComponent,
    HomeRecommendlistComponent,
    HomeRecommendauthorsComponent
 ],
  exports: [
  	HomeBoardComponent,
  	HomeBannerComponent,
    HomeContentlistComponent,
  	HomeRecommendlistComponent,
    HomeRecommendauthorsComponent
  ]
})
export class HomeModule { }

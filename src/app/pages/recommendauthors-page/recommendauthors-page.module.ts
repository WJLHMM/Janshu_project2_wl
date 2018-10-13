import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecommendauthorsPageComponent } from './recommendauthors-page.component';
import { RecommendauthorsPageRoute} from './recommendauthors-page.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RecommendauthorsPageRoute)
  ],
  declarations: [
  	RecommendauthorsPageComponent,
  ]
})
export class RecommendauthorsPageModule { }

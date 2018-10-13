import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecommendlistPageComponent } from './recommendlist-page.component';
import {  RecommendlistPageRoute } from './recommendlist-page.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RecommendlistPageRoute)
  ],
  declarations: [
  	RecommendlistPageComponent,
  ]
})
export class RecommendlistPageModule { }

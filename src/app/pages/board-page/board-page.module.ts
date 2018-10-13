import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  BoardPageComponent } from './board-page.component';
import {  BoardPageRoute} from './board-page.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BoardPageRoute)
  ],
  declarations: [
  	BoardPageComponent,
  ]
})
export class BoardPageModule { }

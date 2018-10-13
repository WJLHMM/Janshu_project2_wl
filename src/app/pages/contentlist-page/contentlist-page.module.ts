import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentlistPageComponent} from './contentlist-page.component';
import { ContentlistpageRoute} from './contentlist-page.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContentlistpageRoute)
  ],
  declarations: [
  	ContentlistPageComponent,
  ]
})
export class ContentlistPageModule { }

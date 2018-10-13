import { RouterModule, Routes } from '@angular/router';

import { RecommendlistPageComponent } from './recommendlist-page.component';

export const  RecommendlistPageRoute: Routes = [
  // 注意坑path''一定要写上，否则切换不出内容
  { 
  	path: '',
    component:  RecommendlistPageComponent,
   }
];
export class    RecommendlistPageRoutingModule { }

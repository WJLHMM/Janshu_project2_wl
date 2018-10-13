import { RouterModule, Routes } from '@angular/router';


import { RecommendauthorsPageComponent } from './recommendauthors-page.component';

export const RecommendauthorsPageRoute: Routes = [
  // 注意坑path''一定要写上，否则切换不出内容
  { 
  	path: '',
    component: RecommendauthorsPageComponent,
   }
];
export class RecommendauthorsPageRoutingModule { }

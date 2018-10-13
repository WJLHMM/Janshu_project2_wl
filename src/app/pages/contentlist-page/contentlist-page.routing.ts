import { RouterModule, Routes } from '@angular/router';

import { ContentlistPageComponent } from './contentlist-page.component';

export const ContentlistpageRoute: Routes = [
  // 注意坑path''一定要写上，否则切换不出内容
  { 
  	path: '',
    component: ContentlistPageComponent,
   }
];
export class ContentlistpageRoutingModule { }

import { RouterModule, Routes } from '@angular/router';

import { BannerPageComponent } from './banner-page.component';

export const BannerPageRoute: Routes = [
  // 注意坑path''一定要写上，否则切换不出内容
  { 
  	path: '',
    component:  BannerPageComponent,
   }
];
export class  BannerPageRoutingModule { }

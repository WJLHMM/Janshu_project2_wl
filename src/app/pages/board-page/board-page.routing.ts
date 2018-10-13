import { RouterModule, Routes } from '@angular/router';

import { BoardPageComponent } from './board-page.component';

export const  BoardPageRoute: Routes = [
  // 注意坑path''一定要写上，否则切换不出内容
  { 
  	path: '',
    component:  BoardPageComponent,
   }
];
export class   BoardPageRoutingModule { }

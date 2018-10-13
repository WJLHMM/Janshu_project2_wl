import { RouterModule, Routes, } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DownloadComponent } from './download/download.component';

import { HomeComponent } from './pages/home/home.component';
import { RecommendlistPageComponent } from './pages/recommendlist-page/recommendlist-page.component';

// import {CustomPreloadingStrategy} from "./SelectivePreloadingStrategy/SelectivePreloadingStrategy";
// import {AuthService} from "./routeguard/auth.service";
// import {AuthGuard} from "./routeguard/auth.guard";

export const appRoute: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'download', component: DownloadComponent },
  { 
    path: 'recommendlist', 
    loadChildren: './pages/recommendlist-page/recommendlist-page.module#RecommendlistPageModule'},
  { 
    path: 'contentlist',  
    loadChildren: './pages/contentlist-page/contentlist-page.module#ContentlistPageModule'},
  { 
    path: 'recommendauthors',  
    loadChildren: './pages/recommendauthors-page/recommendauthors-page.module#RecommendauthorsPageModule'},
  { 
    path: 'banner',  
    loadChildren: './pages/banner-page/banner-page.module#BannerPageModule'},
  { 
    path: 'board',  
    loadChildren: './pages/board-page/board-page.module#BoardPageModule'},

  // {
  //   path: 'Article', 
  //   component: ArticleComponent,
  // 	children: [
		//  { path: '', redirectTo: 'Xinqiji/1',pathMatch: 'full' },
		//  { path: 'Xinqiji/:page', component: XinqijiComponent },
		//  { path: 'Libai/:page', component: LibaiComponent },
		//  { path: 'Sushi/:page', component: SushiComponent }
  // 	]
  // },
  // { 
  //   path: 'Blog',
  //   loadChildren: './blog/blog.module#BlogModule',
  //   data: {preload: true},
  //   canLoad:[AuthGuard],
  //   canActivate:[AuthGuard],
  // },
  // { 
  //   path: 'Vedio', 
  //   loadChildren: './vedio/vedio.module#VedioModule',
  //   // data: {preload: false},
   
  //  },
   // 注意**这个需要调到最后一个，否则无法跳转？
  // { path: '**', component: HomeComponent }
  { path: '**', redirectTo: 'home', pathMatch:'full' }
];


export class AppRoutingModule { }

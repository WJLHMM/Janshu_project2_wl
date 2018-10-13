import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppService } from './app.service';
import {  appRoute } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { LoginComponent } from './login/login.component';
import { BacktopComponent } from './pages/backtop/backtop.component';
import { DownloadComponent } from './download/download.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    BacktopComponent,
    DownloadComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [
    // AppService
  ],
  exports:[
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

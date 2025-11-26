import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {SplashScreen} from "@awesome-cordova-plugins/splash-screen/ngx";
import {StatusBar} from "@awesome-cordova-plugins/status-bar/ngx";
import { IonicStorageModule } from "@ionic/storage-angular";
import {AppVersion} from "@awesome-cordova-plugins/app-version/ngx";
import { DatePipe } from '@angular/common';
import {IonicSelectableModule} from 'ionic-selectable';

// import {RemoveCommaPipe} from "./pipes/removecomma.pipe";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicSelectableModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot({
      swipeBackEnabled: true
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}

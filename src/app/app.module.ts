import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {HttpClientModule} from '@angular/common/http';
//import { IonicStorageModule } from '@ionic/storage';


//imports of Flashlight,Geolocation,HttpClientModule
//added them to the imports array in @NgModule

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,],
  providers: [Flashlight,Geolocation, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,}],
  bootstrap: [AppComponent],
})
export class AppModule {}

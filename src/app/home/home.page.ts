import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
//importing cordova plugins


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//creating two local variables 
  lat:any;
  long:any;

  //creating private varaible for cordova plugins
  constructor(private flashlight: Flashlight, private geolocation: Geolocation) {}

  //method for flashlight plugin
  flashLight(){
     this.flashlight.toggle();
  }

  //method for geolocation plugin
  GPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat =  resp.coords.latitude
      this.long = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}

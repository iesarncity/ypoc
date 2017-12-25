import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ViewChild, ElementRef } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';

declare var google;
/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
	@ViewChild('map') mapElement: ElementRef;
  map: any;

  
  poi = [
  {
    "id": "1",
    "zip": "35000",
    "province": "ยโสธร",
    "district": "จังหวัด",
    "lat": 15.802173,
    "lng": 104.139588
  }];

  constructor(public navCtrl: NavController, 
    public geolocation: Geolocation,
    private callNumber: CallNumber,
    public navParams: NavParams) {
  }


  ionViewDidLoad(){
    this.loadMap();
  }
 
  launchDialer(n:string){
      this.callNumber.callNumber(n, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
  loadMap(){
  
      this.geolocation.getCurrentPosition().then((position) => {
  
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myLatlng = {lat: 15.802173, lng: 104.139588};
        let mapOptions = {
          // center: latLng,
          center: myLatlng,
          
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
  
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarkerx();

      }, (err) => {
        console.log(err);
      });
  
    }

    getlocation() {
      this.geolocation.getCurrentPosition().then((position) => {
  
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
        let mapOptions = {
          center: latLng,
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
  
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarkerx();

      }, (err) => {
        console.log(err);
      });
    }


    addMarkerx(){
  
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.BOUNCE,
        position: this.map.getCenter()
      });
    
      let content = "<h4>ศาลากลางจังหวัดยโสธร</h4>";          
    
      this.addInfoWindow(marker, content);
  
    }

  addMarker(title, mylatitude, mylongitude){
  
    let latLng = new google.maps.LatLng(mylatitude, mylongitude);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DOWN,
      position: latLng
    });

    //this.map.getCenter()

    let content = "<h4>" + title + "</h4>";          
  
    this.addInfoWindow(marker, content);
  
  }


  addMarkers()
  {
      // this.addMarker('A', 13.736445,100.467490);
      // this.addMarker('B', 13.748237,100.480822);
      // this.addMarker('C', 13.741845,100.470794);


      for(var i=0; i< this.poi.length; i++)
      {
        this.addMarker(this.poi[i].district, this.poi[i].lat,this.poi[i].lng);
      }
  }
    

  addInfoWindow(marker, content){
  
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });
    
      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
  
  }


}

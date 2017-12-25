import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer } from '@ionic-native/document-viewer';
/**
 * Generated class for the ShowalertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showalert',
  templateUrl: 'showalert.html',
})

export class ShowalertPage {
  person;
  constructor(public navCtrl: NavController, 
    private document: DocumentViewer,
    public navParams: NavParams) {
    this.person = navParams.data.member;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowalertPage');
  }

}

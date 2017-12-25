import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

/**
 * Generated class for the CctvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cctv',
  templateUrl: 'cctv.html',
})
export class CctvPage {
  items: any;
  // videos: any[] = [
  //   {
  //     title: 'xxxxx',
  //     video: 'https://www.youtube.com/watch?v=Fg4UjeRe2k8',
  //   },
  //   {
  //     title: 'yyyyyyyyyy',
  //     video: 'https://www.youtube.com/watch?v=igFXaO3NT58',
  //   }
  // ]
  constructor(public navCtrl: NavController, 
    private sanitizer: DomSanitizer,
    public restapiService: RestapiServiceProvider,
    public navParams: NavParams) {
      this.getCctvs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CctvPage');
  }

  getCctvs() {
    this.restapiService.getCctv()
    .then(data => {
      this.items = data;
    });
  }

  trust(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

}

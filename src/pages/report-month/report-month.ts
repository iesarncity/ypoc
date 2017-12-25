import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
/**
 * Generated class for the ReportMonthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-month',
  templateUrl: 'report-month.html',
})
export class ReportMonthPage {
  items: any = [];
  loader: any;
  constructor(public navCtrl: NavController, 
    public restapiService: RestapiServiceProvider,
    private loadingCtrl: LoadingController,
    public navParams: NavParams) {
      this.getItems(event);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportMonthPage');
  }

         //เลื่อนลง refresh
    doRefresh(refresher) {
          console.log('Begin async operation', refresher);
          this.getItems(refresher);
    }
  
  
    getItems(event) {
      // ให้แสดง popup กำลังโหลด
      this.presentLoading();
  
      this.restapiService.getReportMonth()
      .then(data => {
        this.items = data;
      });
      this.loader.dismiss();//เมื่อโหลดเสร็จแล้วให้ปิด popup
      try {
        event.complete();
      } catch (e) {
          console.log(e.status);
      }
    }

      //ให้แสดง popup กำลังโหลด
  presentLoading() {
    this.loader = this.loadingCtrl.create({
        content: "Loading..."
    });
    this.loader.present();
  }


}

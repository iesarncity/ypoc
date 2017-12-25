import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { ShowalertPage } from "../../pages/showalert/showalert";
import { Http } from '@angular/http';
/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  items: any = [];
  loader: any;
  constructor(public navCtrl: NavController, 
    public restapiService: RestapiServiceProvider,
    private loadingCtrl: LoadingController,
    public http: Http,
    public navParams: NavParams) {
      this.getItemsMsg(event);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }


  // doRefresh(refresher) {
  //   this.restapiService.getAlert().then(() => {
  //     refresher.complete();
  //   });

  // }

  /// OK
  doRefresh(refresher)
  {
  this.http.get('http://www.yasothonpoc.com/webservice/messages.php')
    .map(res => res.json())
    .subscribe(res => {
      this.items = res;

    refresher.complete();
      }, (err) => {
      alert("failed");
      });
  }
  

  getItemsMsg(event) {
    // ให้แสดง popup กำลังโหลด
    this.presentLoading();

    this.restapiService.getMessages()
    .then(data => {
      this.items = data;
    });
    try {
      event.complete();
    } catch (e) {
        console.log(e.status);
    }

    this.loader.dismiss();//เมื่อโหลดเสร็จแล้วให้ปิด popup
  }

  
  presentLoading() {
    this.loader = this.loadingCtrl.create({
        content: "Loading..."
    });
    this.loader.present();
  }

  Viewperson(id)
  {
      this.navCtrl.push(ShowalertPage,{
        member:id
      });
  }



}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { ApigetalertProvider } from '../../providers/apigetalert/apigetalert';
import { NewsDetailPage } from "../../pages/news-detail/news-detail";
import { IonicImageViewerModule } from 'ionic-img-viewer';
/**
 * Generated class for the AlertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {
  data: any;
  items: string[];
  searchQuery: string = '';
  public filteritems : any = [];
//  users: string[];
  errorMessage: string;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;
  loader: any;

  constructor(public navCtrl: NavController, 
    public restapiService: RestapiServiceProvider,
    public restApi: ApigetalertProvider,
    private loadingCtrl: LoadingController,
    public navParams: NavParams) {
      this.getPageItem(event);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  doRefresh(refresher){
    this.restApi.getItemAPI(this.page)
    .subscribe(
      res => {
        this.data = res;
        this.items = this.data.data;
        this.perPage = this.data.per_page;
        this.totalData = this.data.total;
        this.totalPage = this.data.total_pages;
         refresher.complete();
       },(error)=> {
          console.log(error);
       });
   }

  getPageItem(event) {
    this.restApi.getItemAPI(this.page)
       .subscribe(
         res => {
           this.data = res;
           this.items = this.data.data;
           this.perPage = this.data.per_page;
           this.totalData = this.data.total;
           this.totalPage = this.data.total_pages;
         },
         error =>  this.errorMessage = <any>error);
   
  }

  doInfinite(infiniteScroll) {
    this.page = this.page+1;
    setTimeout(() => {
      this.restApi.getItemAPI(this.page)
         .subscribe(
           res => {
             this.data = res;
             this.perPage = this.data.per_page;
             this.totalData = this.data.total;
             this.totalPage = this.data.total_pages;
             for(let i=0; i<this.data.data.length; i++) {
               this.items.push(this.data.data[i]);
             }
           },
           error =>  this.errorMessage = <any>error);
  
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  //ให้แสดง popup กำลังโหลด
  presentLoading() {
    this.loader = this.loadingCtrl.create({
        content: "Loading..."
    });
    this.loader.present();

  }


  Viewperson(newsID)
  {
      this.navCtrl.push(NewsDetailPage,{
        member:newsID
      });
  }


}

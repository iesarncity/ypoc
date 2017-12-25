import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { ApigetnewsProvider } from '../../providers/apigetnews/apigetnews';
import { NewsDetailPage } from "../../pages/news-detail/news-detail";
import { ItemsDetailPage } from "../../pages/items-detail/items-detail";
import { AboutPage } from "../../pages/about/about";
import { AlertPage } from "../../pages/alert/alert";
import { SlideitemsPage } from "../../pages/slideitems/slideitems";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild('loopSlider') loopSlider: Slides;

    tab1Root = HomePage;
    tab2Root = AlertPage;
    tab3Root = AboutPage;

    startingIndex: number;
    slideLength: boolean = false;
    items: any = [];
    slideData: any = [];
    loader: any;
    data: any;

    errorMessage: string;
    page = 1;
    perPage = 0;
    totalData = 0;
    totalPage = 0;

  constructor(public navCtrl: NavController,
    public restapiService: RestapiServiceProvider,
    public restApi: ApigetnewsProvider,
    private loadingCtrl: LoadingController
  ) {
    
    if(this.slideData.length > 0) {
      this.slideLength = true;
    }
    // this.getYpocs(event);
    this.getSlideData();
    this.getPageItem(event);
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

  // getItems(ev: any) {
  //   this.initializeItems();
  //   let val = ev.target.value;
  //   if (val && val.trim() != '') {
  //     this.items = this.data.filter((item) => {
  //       return (item.Header.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }


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

  //เลื่อนลง refresh
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

  // doRefresh(refresher) {
  //       console.log('Begin async operation', refresher);
  //       this.getSlideData(refresher);
  // }

  getSlideData() {
    this.restapiService.getImage()
      .then(data => {
        this.slideData = data;
      });

      // try {
      //   event.complete();
      // } catch (e) {
      //     console.log(e.status);
      // }
  }

  //ให้แสดง popup กำลังโหลด
  presentLoading() {
    this.loader = this.loadingCtrl.create({
        content: "Loading..."
    });
        this.loader.present();
  }

  Viewslide(newsID)
  {
      this.navCtrl.push(SlideitemsPage,{
          member:newsID
      });
  }

  Viewperson(newsID)
  {
      this.navCtrl.push(NewsDetailPage,{
          member:newsID
      });
  }

  Home()
  {
      this.navCtrl.setRoot(HomePage);
  }

  About()
  {
      this.navCtrl.push(AboutPage,{
        
      });
  }

  Alert()
  {
      this.navCtrl.push(AlertPage,{
        
      });
  }

  
}

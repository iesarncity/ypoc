import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { EdocProvider } from '../../providers/edoc/edoc';
/**
 * Generated class for the PagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages',
  templateUrl: 'pages.html',
})
export class PagesPage {
  Document: string = "edoc";
  Edocitems: any = [];
  Dlitems: any = [];
  Newsitems: any = [];
  loader: any;

  items: string[];
  searchQuery: string = '';
  public filteritems : any = [];
  data: any;
  errorMessage: string;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
  //ค้นหา


  constructor(public navCtrl: NavController,
    public restapiService: EdocProvider,
    private theInAppBrowser: InAppBrowser,
    private loadingCtrl: LoadingController, 
    public navParams: NavParams) {
    //this.Document = "edoc";
    this.getNewsItem(event);
    // this.initializeItems();
    this.getDownloadItem(event);
    this.getPageItem(event);
  }

  public openWithSystemBrowser(url : string){
    let target = "_system";
    this.theInAppBrowser.create(url,target,this.options);
  }
  public openWithInAppBrowser(url : string){
      let target = "_blank";
      this.theInAppBrowser.create(url,target,this.options);
  }
  public openWithCordovaBrowser(url : string){
      let target = "_self";
      this.theInAppBrowser.create(url,target,this.options);
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesPage');
  }

  // initializeItems() {
  //   this.filteritems = this.Edocitems;
  // }
  // initializeItems() {
  //   this.filteritems = this.data;
  // }


  getPageItem(event) {
    this.restapiService.getEdocAPI(this.page)
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

  doRefresh(refresher) {
    this.restapiService.getEdocAPI(this.page)
    .subscribe(
      res => {
        this.data = res;
        this.items = this.data.data;
        this.perPage = this.data.per_page;
        this.totalData = this.data.total;
        this.totalPage = this.data.total_pages;
          refresher.complete();
        }, (err) => {
          alert("failed");
          });
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
      this.restapiService.getEdocAPI(this.page)
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

/////////////////////////////// dl

getDownloadItem(event) {
    this.restapiService.getDlAPI(this.page)
       .subscribe(
         res => {
           this.data = res;
           this.Dlitems = this.data.data;
           this.perPage = this.data.per_page;
           this.totalData = this.data.total;
           this.totalPage = this.data.total_pages;
         },
         error =>  this.errorMessage = <any>error);
   
  }

  doRefresh2(refresher) {
    this.restapiService.getDlAPI(this.page)
    .subscribe(
      res => {
        this.data = res;
        this.Dlitems = this.data.data;
        this.perPage = this.data.per_page;
        this.totalData = this.data.total;
        this.totalPage = this.data.total_pages;
          refresher.complete();
        }, (err) => {
          alert("failed");
          });
  }


  doInfinite2(infiniteScroll) {
    this.page = this.page+1;
    setTimeout(() => {
      this.restapiService.getDlAPI(this.page)
         .subscribe(
           res => {
             this.data = res;
             this.perPage = this.data.per_page;
             this.totalData = this.data.total;
             this.totalPage = this.data.total_pages;
             for(let i=0; i<this.data.data.length; i++) {
               this.Dlitems.push(this.data.data[i]);
             }
           },
           error =>  this.errorMessage = <any>error);
  
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

/////////////////////////////// news

getNewsItem(event) {
  this.restapiService.getNewsAPI(this.page)
     .subscribe(
       res => {
         this.data = res;
         this.Newsitems = this.data.data;
         this.perPage = this.data.per_page;
         this.totalData = this.data.total;
         this.totalPage = this.data.total_pages;
       },
       error =>  this.errorMessage = <any>error);
 
}

doRefresh3(refresher) {
  this.restapiService.getNewsAPI(this.page)
  .subscribe(
    res => {
      this.data = res;
      this.Newsitems = this.data.data;
      this.perPage = this.data.per_page;
      this.totalData = this.data.total;
      this.totalPage = this.data.total_pages;
        refresher.complete();
      }, (err) => {
        alert("failed");
        });
}


doInfinite3(infiniteScroll) {
  this.page = this.page+1;
  setTimeout(() => {
    this.restapiService.getNewsAPI(this.page)
       .subscribe(
         res => {
           this.data = res;
           this.perPage = this.data.per_page;
           this.totalData = this.data.total;
           this.totalPage = this.data.total_pages;
           for(let i=0; i<this.data.data.length; i++) {
             this.Newsitems.push(this.data.data[i]);
           }
         },
         error =>  this.errorMessage = <any>error);

    console.log('Async operation has ended');
    infiniteScroll.complete();
  }, 500);
}




  ////////////////////////////////////////////////////////

  // getEdocument() {
    
  //   this.presentLoading();

  //   this.restapiService.getEdoc()
  //     .then(data => {
  //       this.Edocitems = data;
        
  //     });
  //   this.loader.dismiss();
 
  // }

  // getDownload(event) {

  //   this.restapiService.getDl()
  //     .then(data => {
  //       this.Dlitems = data;
  //     });
   
  //     try {
  //       event.complete();
  //     } catch (e) {
  //         console.log(e.status);
  //     }
  // }

  // getEnews(event) {

  //   this.restapiService.getNews()
  //     .then(data => {
  //       this.Newsitems = data;
  //     });

  //     try {
  //       event.complete();
  //     } catch (e) {
  //         console.log(e.status);
  //     }
  // }


}

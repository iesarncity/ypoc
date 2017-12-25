import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertProvider } from '../../providers/alert/alert';
//import { NewsDetailPage } from "../../pages/news-detail/news-detail";
import { ItemsDetailPage } from "../../pages/items-detail/items-detail";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
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
    public restApi: AlertProvider,
    private loadingCtrl: LoadingController,
    public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.getPageItem(event);
    //this.initializeItems();
    
      
    }

    initializeItems() {
      this.filteritems = this.data;
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

    doRefresh(refresher) {
      this.restApi.getItemAPI(this.page)
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

    getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the searchbar
      let val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.data.filter((item) => {
          return (item.Header.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

           //เลื่อนลง refresh
    // doRefresh(refresher) {
    //   console.log('Begin async operation', refresher);
    //   this.getPageItem(refresher);

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
  
    //ให้แสดง popup กำลังโหลด
    presentLoading() {
      this.loader = this.loadingCtrl.create({
          content: "Loading..."
      });
      this.loader.present();

    }


    Viewperson(newsID)
    {
        this.navCtrl.push(ItemsDetailPage,{
          member:newsID
        });
    }
  
}

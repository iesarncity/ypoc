import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { IonicImageViewerModule } from 'ionic-img-viewer';
//library for social-sharing
import { SocialSharing } from '@ionic-native/social-sharing';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the NewsDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
  person;
  showControls: boolean = true;
  scale: number = 1;

  constructor(public navCtrl: NavController, 
    imageViewerCtrl: ImageViewerController,
    private socialSharing: SocialSharing,
    public navParams: NavParams) {
    this.person = navParams.data.member;
  }

  compilemsg(index):string{
    var msg = this.person.Detail + "-" + this.person.Header ;
    return msg.concat(" \n Sent from my Awesome App !");
  }
  regularShare(index){
    var msg = this.compilemsg(index);
    this.socialSharing.share(msg, null, null, null);
  }
  whatsappShare(index){
    var msg  = this.compilemsg(index);
     this.socialSharing.shareViaWhatsApp(msg, null, null);
   }

   twitterShare(index){
    var msg  = this.compilemsg(index);
    this.socialSharing.shareViaTwitter(msg, null, null);
  }
  facebookShare(index){
    var msg  = this.compilemsg(index);
     this.socialSharing.shareViaFacebook(msg, null, null);
   }

   facebookShare2(){
    var msg2 = "http://www.yasothonpoc.com/page.php?cat="+this.person.category_id+"&newsID="+this.person.newsID;
    this.socialSharing.shareViaFacebook("Message via facebook",null /*Image*/,msg2)
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }


  afterZoomIn (event) {
    console.log('After ZoomIn Event: ', event);
  }

  afterZoomOut (event) {
    console.log('After ZoomOut Event: ', event);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
  }
  
  refresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
    }, 2000);

 }

}

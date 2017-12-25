import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
// import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the ItemsDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items-detail',
  templateUrl: 'items-detail.html',
})
export class ItemsDetailPage {
  person;
  constructor(public navCtrl: NavController, 
    private socialSharing: SocialSharing,
    // private socialSharing: SocialSharing,
    public navParams: NavParams) {
    this.person = navParams.data.member;
    var find = 'http://www.yasothonpoc.com/upload/images/';
    // var re = new RegExp(find, 'g');
    
   // str = person.Detail.replace(re, 'http://www.yasothonpoc.com/upload/images/');
  }

  facebookShare(){
    var msg = "http://www.yasothonpoc.com/page.php?cat=10&newsID=28263" +this.person.Header + "-" + this.person.Detail ;
    this.socialSharing.shareViaFacebook("Message via facebook",null /*Image*/,"http://pointdeveloper.com")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsDetailPage');
  }
  // compilemsg(index):string{
  //   var msg = this.person[index].Header + "-" + this.person[index].Detail ;
  //   return msg.concat(" \n Sent from my Awesome App !");
  // }

  // facebookShare(index){
  //   var msg  = this.compilemsg(index);
  //    this.socialSharing.shareViaFacebook(msg, null, null);
  //  }

}

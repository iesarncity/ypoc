import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the SlideitemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slideitems',
  templateUrl: 'slideitems.html',
})
export class SlideitemsPage {
  person;
  constructor(public navCtrl: NavController, 
    private socialSharing: SocialSharing,
    public navParams: NavParams) {
    this.person = navParams.data.member;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlideitemsPage');
  }

  facebookShare(){
    //var msg = this.person.Detail + "-" + this.person.Header ;
    this.socialSharing.shareViaFacebook("Testing, sharing this from inside an app I'm building right now", "https://alligator.io/images/ionic/social-sharing.png", null); 
  }
  facebookShare2(){
    var msg2 = "http://www.yasothonpoc.com/page.php?cat=" + this.person.category_id + "&newsID=" + this.person.newsID;
    this.socialSharing.shareViaFacebook("Message via facebook",null /*Image*/,msg2)
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

}

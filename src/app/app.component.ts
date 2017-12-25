import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, ToastController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
//import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from "../pages/about/about";
import { AlertPage } from "../pages/alert/alert";
import { ReportMonthPage } from "../pages/report-month/report-month";
import { PagesPage } from "../pages/pages/pages";
import { AddTechnologyPage } from "../pages/add-technology/add-technology";
import { CatalogPage } from "../pages/catalog/catalog";
import { MessagesPage } from "../pages/messages/messages";
import { ShowalertPage } from "../pages/showalert/showalert";
import { TabsPage } from '../pages/tabs/tabs';
import { CctvPage } from "../pages/cctv/cctv";
import { WeatherPage } from "../pages/weather/weather";
import { RadioPage } from "../pages/radio/radio";
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage;
  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;
  pages2: any;

  constructor(public platform: Platform, 
    public toastCtrl: ToastController,
    public statusBar: StatusBar, 
    private ga: GoogleAnalytics,
    //private ga: GoogleAnalytics,
    public splashScreen: SplashScreen,
    public alertCtrl:AlertController,
    private oneSignal: OneSignal 
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าหลัก', component: HomePage },
      { title: 'Messages', component: MessagesPage },
      { title: 'ข่าวเตือนภัย', component: AlertPage },
      // { title: 'ค้นหา', component: AlertPage },
      { title: 'รายการข่าวทั้งหมด', component: ListPage },
      { title: 'เกี่ยวกับเรา', component: AboutPage }
    ];

    this.pages2 = {
      homePage: TabsPage,
      messagesPage: MessagesPage,
      alertPage: AlertPage,
      listPage: ListPage,
      aboutPage: AboutPage,
      reportMonthPage: ReportMonthPage,
      pagesPage: PagesPage,
      addPage: AddTechnologyPage,
      catalogPage: CatalogPage,
      cctvPage: CctvPage,
      weatherPage: WeatherPage,
      radioPage: RadioPage,
      loginPage: LoginPage,
    } 

  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.ga.startTrackerWithId('UA-106880157-4')
        .then(() => {
          console.log('Google analytics is ready now');
          //the component is ready and you can call any method here
          this.ga.debugMode();
          this.ga.setAllowIDFACollection(true);
        })
        .catch(e => console.log('Error starting GoogleAnalytics', e))

       //back button handle
      //Registration of push in Android and Windows Phone
      var lastTimeBackPress=0;
      var timePeriodToExit=2000;

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.oneSignal.startInit('4442b043-855d-4d92-98ac-18fc124c152e', '473607584954');
      
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      
      this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received
      });
      
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        this.nav.push(ShowalertPage);
      });
      
      this.oneSignal.endInit();

      this.platform.registerBackButtonAction(() => {
        // get current active page
         let view = this.nav.getActive();
       if(view.component.name=="TabsPage"){
                       //Double check to exit app                  
                       if(new Date().getTime() - lastTimeBackPress < timePeriodToExit){
                            this.platform.exitApp(); //Exit from app
                       }else{
                            let toast = this.toastCtrl.create({
                               message: 'Press back again to exit App?',
                               duration: 3000,
                               position: 'bottom'
                             });
                               toast.present();     
                               lastTimeBackPress=new Date().getTime();
                       }
       }else{
            // go to previous page
            if(this.nav.canGoBack())
                this.nav.pop();
            this.nav.setRoot(TabsPage);
       }
     });

     
    //  this.ga.startTrackerWithId('UA-106880157-3')
    //     .then(() => {
    //       console.log('Google analytics is ready now');
          
    //       this.ga.debugMode();
    //       this.ga.setAllowIDFACollection(true);
    //     })
    //     .catch(e => console.log('Error starting GoogleAnalytics', e));   
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

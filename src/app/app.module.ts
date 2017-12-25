import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, ViewChild } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Slides } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';
import { OneSignal } from '@ionic-native/onesignal';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZoomAreaModule } from 'ionic2-zoom-area';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
//import { GoogleAnalytics } from '@ionic-native/google-analytics';
//import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { NetworkInterface } from '@ionic-native/network-interface';
import { Badge } from '@ionic-native/badge';
// import { VgCoreModule } from 'videogular2/core';
// import { VgControlsModule } from 'videogular2/controls';
// import { VgOverlayPlayModule } from 'videogular2/overlay-play';
// import { VgBufferingModule } from 'videogular2/buffering';

// import {SingleMediaPlayer} from './single-media-player';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewsDetailPage } from "../pages/news-detail/news-detail";
import { AboutPage } from "../pages/about/about";
import { AlertPage } from "../pages/alert/alert";
import { ReportMonthPage } from "../pages/report-month/report-month";
import { ItemsDetailPage } from "../pages/items-detail/items-detail";
import { PagesPage } from "../pages/pages/pages";
import { AddTechnologyPage } from "../pages/add-technology/add-technology";
import { CatalogPage } from "../pages/catalog/catalog";
import { MessagesPage } from "../pages/messages/messages";
import { ShowalertPage } from "../pages/showalert/showalert";
import { SlideitemsPage } from "../pages/slideitems/slideitems";
import { TabsPage } from '../pages/tabs/tabs';
import { CctvPage } from "../pages/cctv/cctv";
import { YoutubePipe } from "../pipes/youtube/youtube";
import { WeatherPage } from "../pages/weather/weather";
import { RadioPage } from "../pages/radio/radio";
import { LoginPage } from '../pages/login/login';
import { SignupPage } from "../pages/signup/signup";
import { WelcomePage } from "../pages/welcome/welcome";

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from "@ionic/storage";
import { NativeStorage } from '@ionic-native/native-storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestapiServiceProvider } from '../providers/restapi-service/restapi-service';
import { AlertProvider } from '../providers/alert/alert';
import { EdocProvider } from '../providers/edoc/edoc';
import { ApigetnewsProvider } from '../providers/apigetnews/apigetnews';
import { ApigetalertProvider } from '../providers/apigetalert/apigetalert';
import { WeatherProvider } from '../providers/weather/weather';
import { VideoPlayer } from '@ionic-native/video-player';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
// import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    // SingleMediaPlayer,
    MyApp,
    YoutubePipe,
    HomePage,
    ListPage,
    NewsDetailPage,
    AboutPage,
    AlertPage,
    ReportMonthPage,
    ItemsDetailPage,
    PagesPage,
    AddTechnologyPage,
    CatalogPage,
    MessagesPage,
    ShowalertPage,
    SlideitemsPage,
    TabsPage,
    CctvPage,
    WeatherPage,
    RadioPage,
    LoginPage,
    SignupPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    ZoomAreaModule,
    // VgCoreModule,
    // VgControlsModule,
    // VgOverlayPlayModule,
    // VgBufferingModule,
    IonicImageViewerModule,
    IonicStorageModule.forRoot(),
    // IonicModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp,{
      tabsPlacement: 'bottom',
      platforms: {
        android: {
          tabsPlacement: 'top'
        },
        ios: {
          tabsPlacement: 'top'
        },
        windows:
        {
          tabsPlacement: 'top'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewsDetailPage,
    AboutPage,
    AlertPage,
    ReportMonthPage,
    ItemsDetailPage,
    PagesPage,
    AddTechnologyPage,
    CatalogPage,
    MessagesPage,
    ShowalertPage,
    SlideitemsPage,
    TabsPage,
    CctvPage,
    WeatherPage,
    RadioPage,
    LoginPage,
    SignupPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    DocumentViewer,
    OneSignal,
    InAppBrowser,
    CallNumber,
    StreamingMedia,
    VideoPlayer,
    SocialSharing,
    GoogleAnalytics,
    //GoogleAnalytics,
    //FirebaseAnalytics,
    NetworkInterface,
    Badge,
    // SingleMediaPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestapiServiceProvider,
    AlertProvider,
    // SocialSharing,
    EdocProvider,
    ApigetnewsProvider,
    ApigetalertProvider,
    WeatherProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}

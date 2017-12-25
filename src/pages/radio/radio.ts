import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer ,VideoOptions } from '@ionic-native/video-player';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { NetworkInterface } from '@ionic-native/network-interface';
/**
 * Generated class for the RadioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare let networkinterface: any;
@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  url:string;
  stream:any;
  promise:any;
  videoOpts : VideoOptions ;
  items: any;

  constructor(public navCtrl: NavController,
    private streamingMedia: StreamingMedia,
    private networkInterface: NetworkInterface,
    public restapiService: RestapiServiceProvider,
    private videoPlayer : VideoPlayer) {

      this.getCctvs();

      this.url = "http://prdonline.prd.go.th:8044/;stream.mp3";
      this.stream = new Audio(this.url);

      // this.url = "rtmp://edge9.psitv.tv:1935/liveedge/307947436081_600";
      // this.stream = new Audio(this.url);

    // this.url = "http://prdonline.prd.go.th:8044/;stream.mp3";
    // this.stream = new Audio(this.url);
    // this.play();
    // var videoUrl = "http://ch3-33.cdn.byteark.com/live/playlist_720p/index.m3u8";
    // let options: StreamingVideoOptions = {
    //   successCallback: () => { console.log('Video played') },
    //   errorCallback: (e) => { console.log('Error streaming') },
    //   orientation: 'landscape'
    // };

    // this.streamingMedia.playVideo(videoUrl, options);
  }

  // play() {
  //     this.stream.play();
  //     this.promise = new Promise((resolve,reject) => {
  //       this.stream.addEventListener('playing', () => {
  //         resolve(true);
  //       });
  
  //       this.stream.addEventListener('error', () => {
  //         reject(false);
  //       });
  //     });
      
  //   return this.promise;
  // };
  
  // pause() {
  //   this.stream.pause();
  // };
  
  getCctvs() {
    this.restapiService.getCctv()
    .then(data => {
      this.items = data;
    });
  }
  


  startVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'landscape'
    };
 
    // dopa
    this.streamingMedia.playVideo('http://61.91.13.223/live/dopatv03.m3u8', options);
  }

  startVideo2() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'landscape'
    };
 
    // ThaiPBS
    this.streamingMedia.playVideo('http://thaipbs-live.cdn.byteark.com/live/playlist_240p/index.m3u8', options);
  }
 
  startVideo3() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'landscape'
    };
 
    // Workpoint TV
    this.streamingMedia.playVideo('http://symc-cdn04.bkk02.violin.co.th:1935/liveedge/292277227873_600/playlist.m3u8', options);
  }

  startVideo4() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'landscape'
    };
 
    // Thairath TV (32)
    this.streamingMedia.playVideo('http://live.thairath.co.th/trtv2/playlist_240p/index.m3u8', options);
  }
  startVideo5() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'landscape'
    };
 
    // ch7
    this.streamingMedia.playVideo('http://edge160.bugaboo.tv/liveedgech7_partner/_definst_/smil:auto.smil/playlist.m3u8', options);
  }
  startVideo6() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'landscape'
    };
 
    // ch3
    this.streamingMedia.playVideo('http://ch3-33.cdn.byteark.com/live/playlist_720p/index.m3u8', options);
  }

  startVideo7() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'landscape'
    };
 
    // pptv
    this.streamingMedia.playVideo('http://symc-cdn04.bkk02.violin.co.th:1935/liveedge/315182321983_600/playlist.m3u8', options);
  }

  startVideo8() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'landscape'
    };
 
    // nbt tv
    this.streamingMedia.playVideo('http://symc-cdn05.bkk01.violin.co.th:1935/liveedge/308806374084_300/playlist.m3u8', options);
  }

  startAudio() {
		this.stream.play();
		this.promise = new Promise((resolve,reject) => {
			this.stream.addEventListener('playing', () => {
				resolve(true);
			});

			this.stream.addEventListener('error', () => {
				reject(false);
			});
		});
		return this.promise;
	};

	stopAudio() {
		this.stream.pause();
  };
  

  // startAudio() {
  //   let options: StreamingAudioOptions = {
  //       successCallback: () => { console.log('Finished Audio') },
  //       errorCallback: (e) => { console.log('Error: ', e) },
  //       initFullscreen: false // iOS only!
  //     };
   
      
  //     this.streamingMedia.playAudio('http://helix-r2.prd.go.th/nbtradio/live_fm925_41.mp3', options);
  //   }
   
  //   stopAudio() {
  //     this.streamingMedia.stopAudio();
  //   }
 
  // play() {
  //     this.stream.play();
  //     this.promise = new Promise((resolve,reject) => {
  //       this.stream.addEventListener('playing', () => {
  //         resolve(true);
  //       });
  
  //       this.stream.addEventListener('error', () => {
  //         reject(false);
  //       });
  //     });
      
  //   return this.promise;
  // };
 
  // pause() {
  //   this.stream.pause();
  // };
  
 // public playVideo(){
 //      this.videoOpts = {volume : 1.0};
 //      this.videoPlayer.play('http://ch3-33.cdn.byteark.com/live/playlist_720p/index.m3u8').then(() => {
 //      console.log('video completed');
 //      }).catch(err => {
 //      console.log(err);
 //      });    
 //  }
 //  public stopPlayingVideo(){
 //      this.videoPlayer.close();
 //  }

}

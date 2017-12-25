import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestapiServiceProvider {
  apiUrl = 'http://www.yasothonpoc.com/webservice';
  data: any;
  imgdata: any;
  alert: any;
  msg: any;
  alls: any;
  reportm: any;
  cctv: any;

  constructor(public http: Http) {
    console.log('Hello RestapiServiceProvider Provider');
  }

  getItemsPoc() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      // this.http.get(this.apiUrl+'/poc')
      this.http.get(this.apiUrl+'/poc.php')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getImage() {
    if (this.imgdata) {
      return Promise.resolve(this.imgdata);
    }
  
    return new Promise(resolve => {
      // this.http.get(this.apiUrl+'/poc/images')
      this.http.get(this.apiUrl+'/images.php')
        .map(res => res.json())
        .subscribe(data => {
          this.imgdata = data;
          resolve(this.imgdata);
        });
    });
  }

  getAlert() {
    if (this.alert) {
      return Promise.resolve(this.alert);
    }
  
    return new Promise(resolve => {
      // this.http.get(this.apiUrl+'/poc/alert')
      this.http.get(this.apiUrl+'/alert.php')
        .map(res => res.json())
        .subscribe(data => {
          this.alert = data;
          resolve(this.alert);
        });
    });
  }

  getAll() {
    if (this.alls) {
      return Promise.resolve(this.alls);
    }
  
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/poc/getall')
        .map(res => res.json())
        .subscribe(data => {
          this.alls = data;
          resolve(this.alls);
        });
    });
  }

  getReportMonth() {
    if (this.reportm) {
      return Promise.resolve(this.reportm);
    }
  
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/reportm.php')
        .map(res => res.json())
        .subscribe(data => {
          this.reportm = data;
          resolve(this.reportm);
        });
    });
  }

  getMessages() {
    if (this.msg) {
      return Promise.resolve(this.msg);
    }
  
    return new Promise(resolve => {
      // this.http.get(this.apiUrl+'/poc/alert')
      this.http.get(this.apiUrl+'/messages.php')
        .map(res => res.json())
        .subscribe(data => {
          this.msg = data;
          resolve(this.msg);
        });
    });
  }

  getCctv() {
    if (this.cctv) {
      return Promise.resolve(this.cctv);
    }
  
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/getall_cctv.php')
        .map(res => res.json())
        .subscribe(data => {
          this.cctv = data;
          resolve(this.cctv);
        });
    });
  }

}

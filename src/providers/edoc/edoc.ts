import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the EdocProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EdocProvider {
  apiUrl = 'http://www.yasothon.go.th/webservice/';
  edoc: any;
  dl: any;
  news: any;

  constructor(public http: Http) {
    console.log('Hello EdocProvider Provider');
  }


  getEdoc() {
    if (this.edoc) {
      return Promise.resolve(this.edoc);
    }
  
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'get_edoc.php')
        .map(res => res.json())
        .subscribe(data => {
          this.edoc = data;
          resolve(this.edoc);
        });
    });
  }

  getDl() {
    if (this.dl) {
      return Promise.resolve(this.dl);
    }
  
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'get_dl.php')
        .map(res => res.json())
        .subscribe(data => {
          this.dl = data;
          resolve(this.dl);
        });
    });
  }

  getNews() {
    if (this.news) {
      return Promise.resolve(this.news);
    }
  
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'get_news.php')
        .map(res => res.json())
        .subscribe(data => {
          this.news = data;
          resolve(this.news);
        });
    });
  }


  ///////////////////////////////


  getEdocAPI(page): Observable<string[]> {
    return this.http.get(this.apiUrl+"getedoc_page.php?page="+page)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getNewsAPI(page): Observable<string[]> {
    return this.http.get(this.apiUrl+"getnews_page.php?page="+page)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getDlAPI(page): Observable<string[]> {
    return this.http.get(this.apiUrl+"getdl_page.php?page="+page)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }

  


}

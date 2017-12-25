import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'youtube',
})
@Injectable()
export class YoutubePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(public dom: DomSanitizer) {
    
      }
  transform(value: string, ...args) {
    console.log(value);
    return this.dom.bypassSecurityTrustResourceUrl(value);
    // return value.toLowerCase();
  }
}

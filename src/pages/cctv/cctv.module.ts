import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CctvPage } from './cctv';

@NgModule({
  declarations: [
    CctvPage,
  ],
  imports: [
    IonicPageModule.forChild(CctvPage),
  ],
})
export class CctvPageModule {}

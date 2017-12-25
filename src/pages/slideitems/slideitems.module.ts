import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlideitemsPage } from './slideitems';

@NgModule({
  declarations: [
    SlideitemsPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideitemsPage),
  ],
})
export class SlideitemsPageModule {}

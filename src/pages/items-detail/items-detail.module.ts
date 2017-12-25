import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemsDetailPage } from './items-detail';

@NgModule({
  declarations: [
    ItemsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemsDetailPage),
  ],
})
export class ItemsDetailPageModule {}

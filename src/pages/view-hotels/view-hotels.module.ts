import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewHotelsPage } from './view-hotels';

@NgModule({
  declarations: [
    ViewHotelsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewHotelsPage),
  ],
})
export class ViewHotelsPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchHotelsPage } from './search-hotels';

@NgModule({
  declarations: [
    SearchHotelsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchHotelsPage),
  ],
})
export class SearchHotelsPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HotelDetails} from '../home/home'
import hotelArray from '../../pages/home/home'
/**
 * Generated class for the SearchHotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-hotels',
  templateUrl: 'search-hotels.html',
})
export class SearchHotelsPage {
  searchQuery: string = '';
  items: string[];

  nn () {
    hotelArray

  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchHotelsPage');
  }

  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import hotelArray from '../../pages/home/home'
import {LoginPage} from '../../pages/login/login';

/**
 * Generated class for the ViewHotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-hotels',
  templateUrl: 'view-hotels.html',
})
export class ViewHotelsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewHotelsPage');
  }

  logOut(){
    this.navCtrl.setRoot(LoginPage);
  }

}

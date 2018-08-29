import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// imports  from angular/ionic
import {AngularFireAuth} from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ModalController } from 'ionic-angular';
import { SearchHotelsPage } from '../../pages/search-hotels/search-hotels';
import { ViewHotelsPage } from '../../pages/view-hotels/view-hotels';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hotelArray = [    new HotelDetails ('Eastern Cape','Port Elizabeth','Port Elizabeth Marine','13',''),
                    new HotelDetails ('Free State','Bloemfontein','Bloemfontein Willow Lake','22',''),
                    new HotelDetails ('Free State','Bloemfontein','Protea Hotel Bloemfontein','11',''),
                    new HotelDetails ('Free State','Clarens','Protea Hotel Clarens','22',''),
                    new HotelDetails ('Free State','Harrismith','Harrismith Montrose','14',''),
                    new HotelDetails ('Gauteng','Pretoria','Pretoria Loftus Park','34',''),
                    new HotelDetails ('Gauteng','Johannesburg','Johannesburg Wanderers','45',''),
                    new HotelDetails ('Gauteng','Melrose','Fire & Ice! Johannesburg Melrose Arch','36',''),
                    new HotelDetails ('Gauteng','Midrand','Protea Hotel Midrand','48',''),
                    new HotelDetails ('KwaZulu-Natal','Durban','Durban Umhlanga Ridge','67',''),
                    new HotelDetails ('KwaZulu-Natal','Richards Bay','Umfolozi River','89',''),
                    new HotelDetails ('KwaZulu-Natal','Pietermaritzburg','Hotel Hilton','45',''),
                    new HotelDetails ('Limpopo','Polokwane','Polokwane Landmark','27',''),
                    new HotelDetails ('Limpopo','Bela Bela','Hotel Zebula Lodge','32',''),
                    new HotelDetails ('Mpumalanga','Skukuza','Hotel Kruger Gate ','33',''),
                    new HotelDetails ('Mpumalanga','Hazyview','Hotel Hazyview','49',''),
                    new HotelDetails ('Mpumalanga','Nelspruit','Hotel Nelspruit','65',''),
                    new HotelDetails ('North West','Rustenburg','Hunters Rest','32',''),
                    new HotelDetails ('North West','Klerksdorp','Protea Hotel Klerksdorp','11',''),
                    new HotelDetails ('North West','Mahikeng','Protea Hotel Mahikeng','32',''),
                    new HotelDetails ('Northern Cape','Upington','Protea Hotel Upington','21',''),
                    new HotelDetails ('Northern Cape','Kimberley','Protea Hotel Kimberley','13',''),
                    new HotelDetails ('Western Cape','Cape Town','Protea Hotel Cape Town Mowbray','56',''),
                    new HotelDetails ('Western Cape','V&A Waterfront/Sea Point','Protea Hotel Cape Town Cape Castle','67',''),
                    new HotelDetails ('Western Cape','Garden Route','Protea Hotel Knysna Quays','43',''),
                    new HotelDetails ('Western Cape','Winelands','Protea Hotel Stellenbosch','35',''),
                ];  

  constructor(public navCtrl: NavController,
              private aFuth : AngularFireAuth,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController) {
  }

  ionViewWillLoad(){
   this.aFuth.authState.subscribe(data => {
     if (data.email && data.uid){
      const toast = this.toastCtrl.create({
        message: `Welcome , ${data.email}`,
        duration: 3000
      });
      toast.present();
     } else {
      const toast = this.toastCtrl.create({
        message: `Opps! Invalid Info.. try once more`,
        duration: 1000
      });
      toast.present();
     }
   })
  }

  logOut(){
    this.navCtrl.setRoot(LoginPage);
  }

  findHotel(){
    const modal = this.modalCtrl.create(SearchHotelsPage);
    modal.present();
  }

  viewEasternCape(){
    const modal = this.modalCtrl.create(ViewHotelsPage);
    modal.present();
  }
}


export class HotelDetails {
  hotelProvince ;
  hotelCity ;
  hotelName ;
  hotelRoomsAvailable ;
  hotelImage ;

  constructor(hotelProvince, hotelCity, hotelName ,hotelRoomsAvailable ,hotelImage){
    this.hotelProvince = hotelProvince;
    this.hotelCity = hotelCity;
    this.hotelName = hotelName;
    this.hotelRoomsAvailable = hotelRoomsAvailable;
    this.hotelImage = hotelImage;
  }
}


var hotelArray = [];
export default hotelArray;
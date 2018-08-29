import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home'
// impoting the interface from the model file
import {User} from '../../model/user';
// importing the angula fire auth
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireList , AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
   // this inistialises a new user object
  user = {} as User ;
  list : AngularFireList <any>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private aFuth : AngularFireAuth,
              private myDb : AngularFireDatabase) {
  }

  async signupHere(user : User){
  const result = await this.aFuth.auth.createUserWithEmailAndPassword(user.emailAddress,user.password).then(() =>{
    this.aFuth.authState.subscribe(data =>{
      var uid = data.uid;
      this.list = this.myDb.list('user/' + uid);
      this.list.push({
        firstName:user.fname,
        lastName: user.lname,
        location : user.location
      })
    })
    this.navCtrl.setRoot(LoginPage);
  },Error =>{
  })
}

  toHomePage(){
    this.navCtrl.setRoot(LoginPage);
  }

}

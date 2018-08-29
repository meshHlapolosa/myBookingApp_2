import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// impoting the interface from the model file
import {User} from '../../model/user';
// importing the pages
import {RegisterPage} from '../../pages/register/register';
import {HomePage} from '../../pages/home/home';
// imports  from angular
import {AngularFireAuth} from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import {AngularFireList , AngularFireDatabase} from 'angularfire2/database';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  list : AngularFireList <any>;
  // this inistialises a new user object
    user = {} as User ;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private aFuth : AngularFireAuth,
              public toastCtrl: ToastController,
              private myDb : AngularFireDatabase) {
  }

 async signIn(user : User){
   try{
    const result =  this.aFuth.auth.signInWithEmailAndPassword(user.emailAddress , user.password).then(()=>{
    console.log(result); 
      if(result){
        this.aFuth.authState.subscribe(data =>{
        var uid = data.uid;
        this.list = this.myDb.list('user/' + uid);
        this.navCtrl.push(HomePage);
      })}
   }, (e)=> {
      const toast = this.toastCtrl.create({
      message: e,
      duration: 3000
    });
      toast.present();
      console.error(e);
    })
    }catch(e){
    console.error(e);
   }
  }

  signUp(){
    this.navCtrl.push(RegisterPage); 
  }
}

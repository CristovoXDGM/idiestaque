import { SobrePage } from './../sobre/sobre';
import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl:AlertController, private fire:AngularFireAuth,public navCtrl: NavController) {
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK'],
      
    }).present();
  }

  signIn(){
    
    this.fire.auth.signInWithEmailAndPassword(this.user.value,this.password.value)
    .then(data=>{
      this.alert('Success you\'re logged in')
      this.navCtrl.setRoot(SobrePage);
      console.log('got some data',data);
    })
    .catch(error=>{
      this.alert(error.message);
      console.log('got an error',error);
    })

  

  }
}

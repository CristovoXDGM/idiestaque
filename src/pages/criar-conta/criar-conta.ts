import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth'

@Component({
  selector: 'page-criar-conta',
  templateUrl: 'criar-conta.html'
})
export class CriarContaPage {

  @ViewChild ('username') user;
  @ViewChild ('password') pass;

  constructor( private fire: AngularFireAuth , public navCtrl: NavController) {
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.pass.value)
    .then(data =>{
      console.log('got data',data);
    })
    .catch(error=>{
      console.log('got an error',error);
    })
  }
  
}

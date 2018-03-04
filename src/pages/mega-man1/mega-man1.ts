import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mega-man1',
  templateUrl: 'mega-man1.html'
})
export class MegaMan1Page {

  constructor(public navCtrl: NavController) {
  }
  popThis(){
   this.navCtrl.pop() 
  }
  
}

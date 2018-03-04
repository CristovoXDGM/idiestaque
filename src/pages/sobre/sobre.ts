import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MegaMan1Page } from '../mega-man1/mega-man1';

@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage {

  constructor(public navCtrl: NavController) {
  }
  goToMegaMan1(params){
    if (!params) params = {};
    this.navCtrl.push(MegaMan1Page);
  }
}

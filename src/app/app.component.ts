import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SobrePage } from '../pages/sobre/sobre';
import { MegaMan1Page } from '../pages/mega-man1/mega-man1';
import { CriarContaPage } from '../pages/criar-conta/criar-conta';


import { HomePage } from '../pages/home/home';
import { TranslateService } from '@ngx-translate/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(private translate:TranslateService,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      translate.setDefaultLang('en');
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToSobre(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SobrePage);
  }goToMegaMan1(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MegaMan1Page);
  }goToCriarConta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CriarContaPage);
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}

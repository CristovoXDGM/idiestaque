import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
import { MegaMan1Page } from '../pages/mega-man1/mega-man1';
import { CriarContaPage } from '../pages/criar-conta/criar-conta';

import {AngularFireModule} from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

  const firebaseAuth ={
  apiKey: "AIzaSyDWEVZUJYcns52QcxXBaASCBYrVTYHl0Gk",
  authDomain: "indiestaque.firebaseapp.com",
  databaseURL: "https://indiestaque.firebaseio.com",
  projectId: "indiestaque",
  storageBucket: "indiestaque.appspot.com",
  messagingSenderId: "1084794536323"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobrePage,
    MegaMan1Page,
    CriarContaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobrePage,
    MegaMan1Page,
    CriarContaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

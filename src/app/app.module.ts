import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TournamentsPage } from '../pages/tournaments/tournaments';
import { PlayersPage } from '../pages/players/players';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { ServiceLocalStorage } from '../shared/ServiceLocalStorage';
import { Player } from '../shared/ModelPlayer';
import { Players } from '../shared/SelectionPlayers';


@NgModule({
  declarations: [
    MyApp,
    TournamentsPage,
    PlayersPage,
    HomePage,
    TabsPage,
    ServiceLocalStorage,
    Players,
    Player
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TournamentsPage,
    PlayersPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceLocalStorage
  ]
})
export class AppModule {



}

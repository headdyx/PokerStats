import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ServiceLocalStorage } from '../../shared/ServiceLocalStorage';
import { Players } from '../../shared/SelectionPlayers';
import { Player } from '../../shared/ModelPlayer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeplayers: Players;

  constructor(public navCtrl: NavController, public storageservice: ServiceLocalStorage) {
   
    console.log("HomePage Constructor called");        

    storageservice.storage.get('players').then((val) => {
      console.log("ServiceLocalStorage Constructor in Home Page:  " + val);;
    });

    storageservice.storage.get('players').then((val) => {
      this.homeplayers = JSON.parse(val);
    });

  }


  // adds a player object to the homeplayers set via push array function
  addAPlayer(){
    let newplayer = new Player(9, "Blabla Mensch", "assets/pics/Detzn.png", "30.10.2015", 11, 546);

    this.homeplayers.addItem(newplayer);

    console.log("Home addaplayer function called" + JSON.stringify(newplayer) + "  " + this.homeplayers);
  
  }
}

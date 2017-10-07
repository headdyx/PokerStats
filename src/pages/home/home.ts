import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ServiceLocalStorage } from '../../shared/ServiceLocalStorage';
import { Players } from '../../shared/SelectionPlayers';
import { Player } from '../../shared/ModelPlayer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public homePagePlayers: Player[] = new Array<Player>();
  
  constructor(public navCtrl: NavController, public storageservice: ServiceLocalStorage) {
    console.log("HomePage Constructor called");        
  }

  ngOnInit(){
    console.log("OnInit HomePage");
    this.storageservice.storage.get('players').then((val) => {
      if (val != null){
        console.log("ServiceLocalStorage in HomePage:  " + val);
        this.homePagePlayers = JSON.parse(val);
      }else{
        console.log("ServiceLocalStorage is empty in HomePage");
        this.storageservice.getJsonData();
        this.homePagePlayers = this.storageservice.getPlayers();
        
      }
    });
  };

  addAPlayer(): void{
    let newplayer = new Player(9, "Blabla Mensch", "assets/pics/Detzn.png", "30.10.2015", 11, 546);
    this.homePagePlayers.push(newplayer); 
    console.log("Home addaplayer function called" + JSON.stringify(newplayer));
  }

  clearStorage(){
    console.log("Homepage called Storage clearing!!!!!");
    this.storageservice.clearStorage();
  }
}

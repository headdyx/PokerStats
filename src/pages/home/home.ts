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

  public homeplayers: Player[] = [];
  public homeplayers2: Players = new Players(new Array<Player>());

  constructor(public navCtrl: NavController, public storageservice: ServiceLocalStorage) {
   
    console.log("HomePage Constructor called");        

    storageservice.storage.get('players').then((val) => {
      console.log("ServiceLocalStorage Constructor in Home Page:  " + val);
      this.homeplayers = JSON.parse(val);
    });

  }


  // adds a player object to the homeplayers set via push array function
  addAPlayer(): void{
    let newplayer = new Player(9, "Blabla Mensch", "assets/pics/Detzn.png", "30.10.2015", 11, 546);

    console.log("AddAPlayer new Player:  " + JSON.stringify(newplayer));
    
    //console.log("AddAPlayer homeplayer array lenght:  " + this.homeplayers.players.length);
    this.homeplayers.push(newplayer); 
    // this.homeplayers.players.push(newplayer);
   
    console.log("Home addaplayer function called" + JSON.stringify(newplayer));
  
  }

  addAPlayer2(): void{
    let newplayer = new Player(9, "Blabla Mensch", "assets/pics/Detzn.png", "30.10.2015", 11, 546);

    console.log("AddAPlayer new Player:  " + JSON.stringify(newplayer));
    
    //console.log("AddAPlayer homeplayer array lenght:  " + this.homeplayers.players.length);
    this.homeplayers2.players.push(newplayer); 
    // this.homeplayers.players.push(newplayer);
   
    console.log("Home addaplayer function called" + JSON.stringify(newplayer));
  
  }

}

import { Component } from '@angular/core';
import { NavController, ModalController, Events } from 'ionic-angular';

//import { Storage } from '@ionic/storage';
import { ServiceLocalStorage } from '../../shared/ServiceLocalStorage';

import { AddPlayerModal } from '../addplayermodal/addplayermodal';
import { Player } from '../../shared/ModelPlayer';

@Component({
  selector: 'page-players',
  templateUrl: 'players.html'
})
export class PlayersPage {

  playersPagePlayers: any;

  constructor(public navCtrl: NavController, public storageservice: ServiceLocalStorage,
     public modalCtrl: ModalController, public events: Events) {

    console.log("PlayersPage Constructor called");

    storageservice.storage.get('players').then((val) => {
      console.log("ServiceLocalStorage Constructor in Players Page:  " + val);
      this.playersPagePlayers = JSON.parse(val);
    });

    //EVENT to refresh the palyer array on changes
    events.subscribe('players:update', (playersarray) => {
      this.playersPagePlayers = playersarray;
      console.log("EVENT players:update SUBSCRIBE->Listener PlayersPage");
    });

  }


  addPlayerModal(): void{
    let modal = this.modalCtrl.create(AddPlayerModal);
    let arraylength: number = this.storageservice.lengthOfPlayerArray();

    modal.onDidDismiss((data) => {
      console.log("AddPlayer Modal sends: " + data);

      if (data != null){
        
        let newPlayer = new Player(arraylength + 1, data.name, data.picture, '' ,0 , 0);
        this.storageservice.addPlayer(newPlayer);
      };
    });
    modal.present();
  }

  removePlayer(playerId): void{
    console.log("RemovePlayer sends ID: " + playerId);
    this.storageservice.removePlayer(playerId);
  }

}

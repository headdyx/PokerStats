import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

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
     public modalCtrl: ModalController) {

    console.log("PlayersPage Constructor called");

    storageservice.storage.get('players').then((val) => {
      console.log("ServiceLocalStorage Constructor in Players Page:  " + val);
      this.playersPagePlayers = JSON.parse(val);
    });

  }


  addPlayerModal(): void{
    let modal = this.modalCtrl.create(AddPlayerModal);
    
    modal.onDidDismiss((data) => {
      console.log("AddPlayer Modal sends: " + data);

      if (data != ''){
        let newPlayer = new Player(10,data,'','',0,0);
        this.storageservice.addPlayer(newPlayer);
        this.playersPagePlayers.push(newPlayer);
      }
    });
    modal.present();
  }


}

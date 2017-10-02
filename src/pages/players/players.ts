import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-players',
  templateUrl: 'players.html'
})
export class PlayersPage {

  players: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {

    this.players = [
              {
                id: '1',
                name: 'Christian Grasmück',
                imagepath: 'assets/pics/christian-grasmueck.jpg',
                lastgamedate: '01.05.2017',
                wins: '12',
                points: '165'
              },
              {
                id: '2',
                name: 'Peter Seiwert',
                imagepath: 'assets/pics/pit.png',
                lastgamedate: '06.12.2016',
                wins: '10',
                points: '65'
              },
              {
                id: '3',
                name: 'Florian Detzen',
                imagepath: 'assets/pics/Detzn.png',
                lastgamedate: '30.10.2015',
                wins: '11',
                points: '15'
              }
            ];



  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present();
  };

  getPlayer3() {
    this.storage.get('1').then(value => {
      console.log("getter:   " + JSON.stringify(value));
    });
    
  };

}

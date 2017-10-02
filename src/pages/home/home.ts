import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ServiceLocalStorage } from '../../shared/ServiceLocalStorage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeplayers = [];

  constructor(public navCtrl: NavController, public storage: ServiceLocalStorage) {

    this.homeplayers = [
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

    //this.homeplayers = storage.players;      

    console.log("Home Constructor called" + JSON.stringify(this.homeplayers));

  }


  newtest() {
    
    console.log("Home newtest function called" + JSON.stringify(this.storage.players));
 
  };

  addAPlayer(){
    var newplayer: [{
      id: '4',
      name: 'Blabla',
      imagepath: 'assets/pics/Detzn.png',
      lastgamedate: '30.10.2015',
      wins: '11',
      points: '15'
    }];
  console.log("Home addaplayer function called" + JSON.stringify(newplayer) + "  " + this.homeplayers);
  this.homeplayers = this.homeplayers + newplayer;
  }
}

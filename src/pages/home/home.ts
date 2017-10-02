import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeplayers: any;

  constructor(public navCtrl: NavController, public storage: Storage) {

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

           

  }

  storePlayer() {

    var object = { 
      name:'Christian Grasmück', 
      imagepath:'../../assets/pics/christian-grasmueck.jpg', 
      lastgamedate: '01.05.2017',
      wins:12,
      points:1234
    };

    console.log("storePlayer  " + JSON.stringify(object));

    this.storage.set('1', JSON.stringify(object) );
  };

  getPlayer() {
      console.log("getter:   " + JSON.stringify(this.storage.get('1')));
    
  };
  
  getPlayer2() {
    this.storage.get('1').then(value => {
      console.log("getter:   " + JSON.stringify(value));
    });
    
  };

  killPlayer() {
    this.storage.remove('1');
    this.storage.get('1').then(value => {
      console.log("getter:   " + JSON.stringify(value));
    });
    
  };

}

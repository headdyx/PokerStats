import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

import { Players } from '../shared/SelectionPlayers';

@Component({

})
export class ServiceLocalStorage {

  players: Players;

  constructor(public storage: Storage, private http: HttpClient) {


    this.http.get('assets/json/players.json').subscribe(data => {

        //Getting JSON key (players) value (array) pair from the data
        this.players = data['players'];
        console.log("ServiceLocalStorage Constructor:  " + JSON.stringify(this.players));
    });

  }

  removeItem(id) {

    this.players.removeItem(id);
    console.log("LocalStorage remove called on " + id);
  }

}

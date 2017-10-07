import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

import { Players } from '../shared/SelectionPlayers';
import { Player } from '../shared/ModelPlayer';

@Injectable()


export class ServiceLocalStorage {

  public players: Players = new Players(Array<Player>());

  constructor(public storage: Storage, private http: HttpClient) {

    this.http.get('assets/json/players.json').subscribe((data) => {
      
              // Getting JSON key (players) value (array) pair from the data
              this.players = data['players'];
      
              // Setting the array into the key players of storage
              this.storage.set('players', JSON.stringify(this.players));
      
              // getting and the object out of the storage, only possible via then or subscribe
              // because of the async data collection with http
              this.storage.get('players').then((val) => {
                console.log("ServiceLocalStorage Constructor in Observable:  " + val);;
              });
              
    });


  }

  getJsonData(): void{



  }


  removeItem(id) {

    this.players.removeItem(id);
    console.log("LocalStorage remove called on " + id);
  }

}

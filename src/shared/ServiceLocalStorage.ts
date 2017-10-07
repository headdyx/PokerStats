import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

//import { Players } from '../shared/SelectionPlayers';
import { Player } from '../shared/ModelPlayer';

@Injectable()


export class ServiceLocalStorage {

  public players = new Array<Player>();

  constructor(public storage: Storage, private http: HttpClient) {

  }

  getJsonData(): void{
    this.http.get('assets/json/players.json').subscribe((data) => {
      
              // Getting JSON key (players) value (array) pair from the data
              this.players = data['players'];
              this.storage.set('players', JSON.stringify(this.players));
              this.storage.get('players').then((val) => {
                console.log("ServiceLocalStorage Constructor in Observable:  " + val);
              });
              
    });

  }

  clearStorage(){
    this.storage.clear();
    console.log("ServiceLocalStorage Clear Function called");
  }

  getPlayers(): Player[]{
    let player = new Array<Player>();
    this.storage.get('players').then((val) => {
      console.log("ServiceLocalStorage getPlayers called with:  " + val);
      player = JSON.parse(val);    
    });
    return player;
  }

  addPlayer(player: Player){
    console.log("ServiceLocalStorage AddPlayer Function called");
    
    this.storage.get('players').then((val) => {
      let playersarray: Player[]
      console.log("---> GET old Players: " + val);
      playersarray = JSON.parse(val);
      playersarray.push(player);
      this.storage.set('players', JSON.stringify(playersarray));
      console.log("---> SET new Players: " + JSON.stringify(playersarray));
    });
    
  }

  removePlayer(id) {
    this.players.removeItem(id);
    console.log("ServiceLocalStorage Remove Function called on " + id);
  }
}

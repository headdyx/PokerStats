import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';
//import { Players } from '../shared/SelectionPlayers';
import { Player } from '../shared/ModelPlayer';

@Injectable()


export class ServiceLocalStorage {


  constructor(public storage: Storage, private http: HttpClient, public events: Events) {

  }

  getJsonData(): void{
    this.http.get('assets/json/sampledata.json').subscribe((data) => {
      
              // Getting JSON key (players) value (array) pair from the data             
              this.storage.set('players', JSON.stringify(data['players']));
              this.storage.set('playersLength', JSON.stringify(data['playersLength']));
              this.storage.set('tournaments', JSON.stringify(data['tournaments']));
              this.storage.set('tournamentsLength', JSON.stringify(data['tournamentsLength']));
              console.log("ServiceLocalStorage getJsonData called:  " + JSON.stringify(data));
              let playersarray: Player[] = data['players'];
              this.events.publish('players:update', playersarray);
              
    });
  }

  clearStorage(){
    this.storage.clear();
    console.log("!!!!!!!!! ServiceLocalStorage Clear Function called !!!!!!!!!!!");
  }

  getPlayers(): Player[]{
    let player = new Array<Player>();
    this.storage.get('players').then((val) => {
      
      console.log("ServiceLocalStorage getPlayers returns:  " + val);
      player = JSON.parse(val);    
    });
    return player;
  }

  addPlayer(player: Player){
    console.log("ServiceLocalStorage AddPlayer Function called");
    
    this.storage.get('players').then((val) => {
      let playersarray: Player[] = JSON.parse(val);
      console.log("---> ADD: GET old Players: " + val);

      playersarray.push(player);
      this.storage.set('players', JSON.stringify(playersarray));
      console.log("---> ADD: SET new Players: " + JSON.stringify(playersarray));

      this.events.publish('players:update', playersarray);
    });
    
  }

  removePlayer(playerId) {
    this.storage.get('players').then((val) => {
      let playersarray: Player[] = JSON.parse(val);
      console.log("---> REMOVE: GET old Players: " + val);

      for(var i = 0; i < playersarray.length; i++) {
        if(playersarray[i].id == playerId){
          playersarray.splice(i, 1);
        }else{
          console.log("---> REMOVE: no Player found for ID: " + playerId);
        }
      }

      this.storage.set('players', JSON.stringify(playersarray));
      console.log("---> REMOVE: SET new Players: " + JSON.stringify(playersarray));

      this.events.publish('players:update', playersarray);
    });
    console.log("ServiceLocalStorage removePlayer Function called on ID: " + playerId);
  }

  lengthOfPlayerArray(): any {
    let length: number;
    return this.storage.get('players').then((val) => {
      let playersarray: Player[] = JSON.parse(val);
      length = playersarray.length;
      console.log("ServiceLocalStorage lengthOfPlayerArray Function called with return: " + length);
      return length;
    });
    
    
  }

}

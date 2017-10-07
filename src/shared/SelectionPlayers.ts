import { Inject, forwardRef, Injectable } from '@angular/core';
import { Player } from '../shared/ModelPlayer';

@Injectable()

export class Players {

  public players: Player[] = new Array<Player>();

  constructor(@Inject(forwardRef(() => Player)) arrayofplayers: Player[]) {
    console.log("Player Array constructed");
    
    this.players = arrayofplayers;
  };


  removeItem(id){
      for(var i = 0; i < this.players.length; i++) {
          if(this.players[i] == id){
             this.players.splice(i, 1);
          }
      }
  }

  addItem(newplayer: Player){
    this.players.push(newplayer);
    console.log("Players.addItem called with " + JSON.stringify(newplayer));

  }
}

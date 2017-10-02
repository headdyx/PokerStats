import { Component } from '@angular/core';
import { Player } from '../shared/ModelPlayer';

@Component({

})
export class Players {

  constructor(public players: Player[]) {
    console.log("Player constructed:");

  };


  addItem(player: Player){
    this.players.push(player);
  }

  removeItem(id){
      for(var i = 0; i < this.players.length; i++) {
          if(this.players[i] == id){
              this.players.splice(i, 1);
          }
      }
  }

}

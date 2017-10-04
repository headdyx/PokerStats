import { Component, Inject, forwardRef } from '@angular/core';
import { Player } from '../shared/ModelPlayer';

@Component({
    selector: 'selectionplayers',
    template: ''
  })

export class Players {


  players: Player[];

  constructor(@Inject(forwardRef(() => Player)) arrayofplayers: Player[]) {
    console.log("Player constructed:");
    this.players = arrayofplayers;
  };


//  addItem(player: Player){
//    this.players.push(player);
//  }

  removeItem(id){
      for(var i = 0; i < this.players.length; i++) {
          if(this.players[i] == id){
             this.players.splice(i, 1);
          }
      }
  }

  addItem(newplayer){
    console.log("test");

  }
}

import { Component } from '@angular/core';

@Component({
    selector: 'modelplayers',
    template: ''
})

export class Player {

  constructor(
        public id: number,
        public name: string,
        public imagepath: string,
        public lastgamedate: string,
        public wins: number,
        public points: number
  ) {

    console.log("Player constructed:"
        + this.id
        + this.name
        + this.imagepath
        + this.lastgamedate
        + this.wins
        + this.points
    );
  };

  changeName(name){
    this.name = name;
  }

  changeImagepath(imagepath){
    this.imagepath = imagepath;
  }

  changeLastgamedate(lastgamedate){
    this.lastgamedate = lastgamedate;
  }

  changeWins(wins){
    this.wins = wins;
  }

  changePoints(points){
    this.points = points;
  }

}

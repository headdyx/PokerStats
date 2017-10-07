import { Injectable } from '@angular/core';


@Injectable()

export class Player {


  constructor(public id: number, public name: string, public imagepath: string,
    /*public imageBase64: string,*/ public lastgamedate: string, public wins: number,
    public points: number) {

    console.log("ModelPlayer constructed: "
        + this.id
        + this.name
        + this.imagepath
        //+ this.imageBase64
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
  /*changeImageBase64(imageBase64){
    this.imageBase64 = imageBase64;
  }*/

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

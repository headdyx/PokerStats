import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'addplayer-modal',
  templateUrl: 'addplayermodal.html'
})
export class AddPlayerModal {

  players: any;

  nameInputValue: String = '';
  cameraInput: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    public storage: Storage) {

  }

 closeModal(){
    this.viewCtrl.dismiss();
 }

 saveNewPlayer(){
    let data = this.nameInputValue;
  
    this.viewCtrl.dismiss(data);
 }


}

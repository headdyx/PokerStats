import { Component, OnInit } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { ServiceLocalStorage } from '../../shared/ServiceLocalStorage';
import { Player } from '../../shared/ModelPlayer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public homePagePlayers: Player[] = new Array<Player>();

  constructor(public navCtrl: NavController, public storageservice: ServiceLocalStorage, 
    public events: Events) {
    
      console.log("HomePage Constructor called");
    
      events.subscribe('players:update', (playersarray) => {
        this.homePagePlayers = playersarray;
        console.log("EVENT players:update SUBSCRIBE->Listener HomePage");
      });
  }

  ngOnInit(){
    console.log("OnInit HomePage");
    this.storageservice.storage.get('players').then((val) => {
      if (val != null){
        console.log("ServiceLocalStorage in HomePage:  " + val);
        this.homePagePlayers = JSON.parse(val);
      }else{
        console.log("ServiceLocalStorage is empty in HomePage");
        this.storageservice.getJsonData();
      }
    });
  };

  clearStorage(){
    console.log("Homepage called Storage clearing!!!!!");
    this.storageservice.clearStorage();
  }
}

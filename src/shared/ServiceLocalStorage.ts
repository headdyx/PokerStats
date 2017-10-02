import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({

})
export class ServiceLocalStorage {

  players: string[];

  constructor(public storage: Storage, private http: HttpClient) {


      this.http.get('assets/json/players.json').subscribe(data => {
        // Read the result field from the JSON response.
        this.players = data['players'];

        console.log("ServiceLocalStorage Constructor:   " + JSON.stringify(this.players));
      });




  }



  removeItem(id) {
    

    console.log("LocalStorage remove called on " + id);
  }

}

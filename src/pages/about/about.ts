import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  tournaments: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    this.tournaments = [
                'Spiel 1',
                'Spiel 2',
                'Spiel 3',
                'Spiel 4',
                'Spiel 5',
                'Spiel sfsdg',
                'Spiel sdg',
                'Spiel sadgsdag',
                'Spiel s',
                'Spiel sgd'

            ];
  }

showTournamentAddDialog(tournament){

  let prompt = this.alertCtrl.create({
     title: tournament,
     //message: "Enter a name for this new album you're so keen on adding",
     inputs: [
       {
         name: 'title',
         placeholder: 'Titel'
       },
     ],
     buttons: [
       {
         text: 'Abbrechen',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Speichern',
         handler: data => {
           console.log('Saved clicked');
         }
       }
     ]
   });
   prompt.present();

};

showTournamentInfos(characterNum){

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();


};
}


export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

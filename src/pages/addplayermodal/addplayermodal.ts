import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'addplayer-modal',
  templateUrl: 'addplayermodal.html'
})
export class AddPlayerModal {

  players: any;

  nameInputValue: String = '';
  cameraInput: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    public storage: Storage, private camera: Camera) {

  }

 closeModal(){
    this.viewCtrl.dismiss();
 }

 saveNewPlayer(){
    let data = this.nameInputValue;
    this.viewCtrl.dismiss(data);
 }

 takePicture(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = 'data:image/jpeg;base64,' + imageData;
   }, (err) => {
     console.log("Some Camera Error");
    // Handle error
   });
 }


}

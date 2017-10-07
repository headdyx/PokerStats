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
  cameraInput: String = '';
  personPicture = 'assets/pics/person.png';

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    public storage: Storage, private camera: Camera) {

  }

 closeModal(){
    this.viewCtrl.dismiss();
 }

 saveNewPlayer(){
    let data = {name: this.nameInputValue, picture: this.cameraInput}
    this.viewCtrl.dismiss(data);
    
 }

 takePicture(){
  const options: CameraOptions = {
    quality: 80,
    destinationType: this.camera.DestinationType.DATA_URL,
    allowEdit: true,
    targetWidth: 100,
    targetHeight: 100,
    correctOrientation: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.cameraInput = base64Image;
    this.personPicture = base64Image;
   }, (err) => {
     console.log("CAMERA PLUGIN some camera error: " + err);
    // Handle error
   });
 }


}

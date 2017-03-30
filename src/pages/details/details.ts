import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

interface Dinosaur{
            "name": string,
            "appeared": number,
            "height": number,
            "length": number,
            "order": string,
            "vanished": number,
            "weight": number,
            "image": string
        };

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  dino: Dinosaur

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.dino = this.navParams.get("selectedDino");
    console.log(this.dino.name);
  }

}

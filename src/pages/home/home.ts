import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailsPage } from '../details/details';
import {  DataAccess } from '../../providers/data-access';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private dinosaurs: Array<any> = [];

  constructor(public navCtrl: NavController,
    private dataAccess: DataAccess
  ) {
    this.dinosaurs = this.dataAccess
      .getDinosaurs();
  }

  goToDetails(dino){
    this.navCtrl.push( DetailsPage, {
      selectedDino: dino
    });
  }

}

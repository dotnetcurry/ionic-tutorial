import { Injectable } from '@angular/core';
import data from '../data/dinosaurs.json';
/*
  Generated class for the DataAccess provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataAccess {

  constructor() {
  }

  getDinosaurs(){
    return data.dinosaurs;
  }

}

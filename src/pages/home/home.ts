import {Component, Injectable} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { Direction } from "../../models/direction";
import {DirectionComponent} from "../../components/direction/direction";

@Injectable()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  directions: Array<Direction>;

  constructor(public navCtrl: NavController, private http: HttpClient, private modal: ModalController) {
    this.directions = [];
    this.http.get('http://127.0.0.1:3000/directions').subscribe(x => {
      if (x instanceof Array) {
        this.directions = x as Array<Direction>;
      }
    });
  }

  onMoreInfo(direction: Direction) {
    this.modal.create(DirectionComponent,{
      'direction': direction
    }).present();
  }

}

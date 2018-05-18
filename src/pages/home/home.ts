import {Component, Injectable} from '@angular/core';
import {AlertController, ModalController, NavController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, private http: HttpClient, private alert: AlertController, private modal: ModalController) {
    this.directions = [];
    this.http.get('http://127.0.0.1:3000/directions').subscribe(x => {
      this.directions = x as Array<Direction>;
      // alert.create({
      //   title: 'Example',
      //   subTitle: 'Example subtitle',
      //   buttons: ['OK']
      // }).present().then(x => x);
    });
  }

  onMoreInfo(direction: Direction) {
    this.modal.create(DirectionComponent,{
      'direction': direction
    }).present();
  }

}

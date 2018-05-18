import {Component, Injectable} from '@angular/core';
import { Direction } from "../../models/direction";
import {NavController, NavParams} from "ionic-angular";

/**
 * Generated class for the DirectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Injectable()
@Component({
  selector: 'direction',
  templateUrl: 'direction.html'
})
export class DirectionComponent {

  direction: Direction;
  private params: NavParams;

  constructor(params: NavParams, public navCtrl: NavController) {
    this.direction = params.get("direction");
    this.params = params;
  }

  closeModal() {
    this.navCtrl.pop();
  }
}

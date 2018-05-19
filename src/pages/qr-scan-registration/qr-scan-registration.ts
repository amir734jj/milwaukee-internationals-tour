import {Component, Injectable} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {QrResult} from "../../models/qr-result";

/**
 * Generated class for the QrScanRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Injectable()
@Component({
  selector: 'page-qr-scan-registration',
  templateUrl: 'qr-scan-registration.html',
})
export class QrScanRegistrationPage {

  public scanResult: QrResult;

  public scanning: Boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public qrScanner: QRScanner, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrScanRegistrationPage');
  }

  startScan() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          this.scanning = true;
          this.qrScanner.useBackCamera();

          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.scanResult = text["result"] as QrResult;

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            this.scanning = false;
          });

        } else if (status.denied) {
          this.alertCtrl.create({
            title: 'Access defined',
            subTitle: 'Access to camera denied!',
            buttons: ['OK']
          }).present().then(x => x);

          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  stopScan() {
    this.qrScanner.hide().then(_ => this.qrScanner.destroy());
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WalkthroughPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {

  slides = [
    {
      title: "Premis Of The App!",
      description: "The <b>details</b>.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "AR Cloud OCR",
      description: "<b>Details</b> .",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Rapid Serial Visual Presentation",
      description: "The <b>description</b>.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RsvpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-rsvp',
  templateUrl: 'rsvp.html',
})
export class RsvpPage {

  rsvpString: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.rsvpString = "Hello World";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RsvpPage');
  }

}

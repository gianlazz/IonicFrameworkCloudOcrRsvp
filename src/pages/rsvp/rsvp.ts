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
  demoString: string = "Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations to address all of the parts of the developer's workflow while building complex web applications. Angular is a complete rewrite from the same team that built AngularJS.";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.rsvpString = "Hello World";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RsvpPage');
  }

}

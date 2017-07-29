import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WalkthroughPage } from '../walkthrough/walkthrough';
import { RsvpPage } from '../rsvp/rsvp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  walkthroughPage = WalkthroughPage;
  rsvpPage = RsvpPage;
  constructor(public navCtrl: NavController) {

  }

}

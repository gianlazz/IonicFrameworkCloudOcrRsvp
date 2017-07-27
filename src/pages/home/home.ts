import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WalkthroughPage} from '../walkthrough/walkthrough';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  walkthroughPage = WalkthroughPage;
  constructor(public navCtrl: NavController) {

  }

}

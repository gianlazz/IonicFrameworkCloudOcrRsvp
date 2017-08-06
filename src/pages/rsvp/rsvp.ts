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
  //this.rsvpString = this.demoString;

  this.rsvp();
  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad RsvpPage');
  }

  public async rsvp() {
  console.log(this.demoString.split(/[\s]+/));
   let splitStringArray = this.demoString.split(/[\s]+/);
   let index = 3;
   console.log(splitStringArray[index])
   console.log(splitStringArray.length)
   //this.rsvpString = splitStringArray[3];

   while (index < splitStringArray.length){
    this.rsvpString = splitStringArray[index]
    await new Promise(r => setTimeout(r, 200));
    index++
    console.log(index)
   }
  }

  // }
   //displaynextword
  //}
/*
  //READING = 0
  displayNextWord(words,index,interval) {
  	var $container = $("#word");
  	(function step() {
  		//if(READING == 0){return;}
  		$container.html(words[index]);
  		if (index++ < words.length) {
        //calls a function after a set amont of time
  			setTimeout(step, interval);
  		}
  	})();
  }

  private runRSVP() {
    let displayNextWord = this.displayNextWord;
    let getWords = this.getWords
    $(document).ready(function(){
      $("#wordDisplay").click(function(){
        console.log("#wordDisplay");
        //if(READING == 1){ READING = 0;return; }
        let text = $("#inputText").val();
        let words = getWords(text);
        let speed = $('#wpm').val()
        let interval = 1.0/(speed/60.0)*1000.0
        //let READING = 1
        displayNextWord(words, 0, interval);
        //READING = 0
      })
    })
  }
*/
}

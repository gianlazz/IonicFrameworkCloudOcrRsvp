demoString: string = "Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations to address all of the parts of the developer's workflow while building complex web applications. Angular is a complete rewrite from the same team that built AngularJS.";
this.rsvpString = this.demoString;

var getWords = function(text)
{
	//return text.split(/\b\s+/)
	//return text.split(" ")
	return text.split(/[\s]+/)
}
var changeWord = function(wordstring)
{
	$("#word").html(wordstring)
}

//READING = 0
function displayNextWord(words,index,interval) {
	var $container = $("#word");
	(function step() {
		//if(READING == 0){return;}
		$container.html(words[index]);
		if (index++ < words.length) {
			setTimeout(step, interval);
		}
	})();
}

$(document).ready(function(){
	$("#wordDisplay").click(function(){
		//if(READING == 1){ READING = 0;return; }
		text = $("demoString").val()
		words = getWords(text)
		speed = $('#wpm').val()
		interval = 1.0/(speed/60.0)*1000.0
		//READING = 1
		displayNextWord(words, 0, interval);
		//READING = 0
	})
})

//create an OBJ to hold Qs, As, and correct As
// var multipleChoice = ["Cappuccino","Mocha","Latte","Cafe Au Lait","Americano"];
var $questions = [];
//Variable that will hold our setInterval that runs the timer
var intervalId;

// 	qOne: "Equal parts espresso, steamed milk and foamed milk. The classsic version has chocolate sprinkled on top.",
// 	aOne: "Cappuccino",
// 	qTwo: "60ml of espresso, 60ml of chocolate and 30ml of steamed milk",
// 	aTwo: "Mocha",
// 	qThree: "A shot of espresso with 300 ml steamed milk and only 2ml foamed milk",
// 	aThree: "Latte",
// 	};
// var questionThree = {
// 	qThree: "A shot of espresso with 300 ml steamed milk and only 2ml foamed milk",
// 	aThree: "Latte",
// 	};


var $correctCount = 0
var $incorrectCount = 0
var $blankCount = 0

function $introScreen(){
	$(".triviascreen").hide();
	$(".scorescreen").hide();
};

//WHAT WILL HAPPEN WHEN THE GAME STARTS ==================================================
function gameStart(){
	console.log("OMG it works!");
	$(".introscreen").hide();
	$(".triviascreen").show();
	// $(".timer").show();
	$("#timer").html($timer.converted);

};
            // intervalId = setInterval(stopwatch.count, 1000);


//TIMER OBJECT ===========================================================================
// var $timer = "TIMER WORKS!";
	var $timer = {
		remaining: 5,
		reset: function (){
			$timer.remaining = 5;
			$("div.#timer").html("00:05"); //could you do .replaceWith here as well/instead?	
		},
		start: function (){
			$("#timer").show();
			intervalId = setInterval($timer.count,1000);
		},
		stop: function(){
			//use clearInterval to stop the count here
			clearInterval(intervalId);
		},
		count: function(){
			$timer.remaining--;
			var converted = $timer.timeConverter($timer.remaining);
			console.log(converted);
			$("#timer").html(converted); //there seems to be a 1 sec delay
			if ($timer.remaining === 0){
				console.log("time is up!");
				$timer.stop();
			}
		},
		timeConverter: function(t) {
			var minutes = Math.floor(t/60);
			var seconds = t-(minutes*60);

			if (seconds < 10) {
				seconds = "0"+seconds;
			}
			if (minutes === 0) {
				minutes = "00";
			}
			else if (minutes<10) {
				minutes = "0"+minutes;
			}
			return minutes + ":" + seconds;
		}
	};

// var $timer = {
// 	remaining: 20,
// 	start: function(){
// 	$(".timertwo").show();
// 	intervalId = setInterval($timer.count,1000);
// 	},
// 	count: function(){
// 	$timer.remaining--;
// 	console.log($timer.count);
// 	if ($timer.remaining === 0){
// 		alert("time's up!")
// 	};
// 	},

// };

// $timer.show($timer.remaining + " seconds");


//Aaaaand ACTION! ======================================================================

$(document).ready(function() {
	// $(".timer").hide();
	$introScreen();	


//When the Player clicks 'start'========================================================
	// Questions and MC options pop up (append)
	$(".startbutton").on("click", function (){
		// $("p").hide();
		// $("button").hide();
		gameStart();
		$timer.start();

		// $(".questionone").append(triviaData.qOne);

		//if (TIMER=0) { RUNScoreScreenfn};
		//else if (user clicks done)
	});

		// For loop to run through questions
			//Done function - Detect if question answered is correct or incorrect
		//only one answer can be selected per question
	// 'Done' button (append) to end the game before timer ends

// GAME TIMER - Timer is displayed and begins to countdown 
	// When Timer ends... (make sure to include .setInterval())
	//'ALL DONE!' message appears
	// RESULTS - Score is displayed with no.Correct && no.Incorrect && no.Unanswered
//When timer runs out || player hits done ==============================================
	// $(".donebutton").on(click,function(){
		//everything is hidden except for the .scorescreen
	// });

// Closing line of (document).ready ====================================================
});
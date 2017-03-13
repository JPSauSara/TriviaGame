//=================================== GLOBAL VARIABLES ===================================

var $questions = [];
var $playerGuess;
var $answers = [];
var $playerOptions = [];
var $response = [];

//create an OBJ to hold Qs, As, and correct As
var $trivia = {
	challenge: [
		{
			question: "Equal parts espresso, steamed milk and foamed milk. The classsic version has chocolate sprinkled on top.",
			answer: "Cappuccino"
		}, {
			question: "60ml of espresso, 60ml of chocolate and 30ml of steamed milk",
			answer: "Mocha"
		}, {
			question: "A shot of espresso with 300 ml steamed milk and only 2ml foamed milk",
			answer: "Latte"
		}, {
			question: "If you prefer brewed coffee over espresso, this drink is for you. Cup of brewed coffee with warm, steamed milk",
			answer: "Cafe Au Lait"
		}, {
			question: "A shot of espresso (30 ml) with twice the amount of water (60 ml)",
			answer: "Americano"
		}
	],
	options: [
		"Cappuccino", "Mocha","Latte","Cafe Au Lait","Americano"
	],
};

//Variable that will hold our setInterval that runs the timer
var intervalId;
//Variables for scorescreen
var $correctCount = 0;
var $incorrectCount = 0;
var $blankCount = 0;

//======================================= FUNCTIONS ==========================================

// function multoptions(){
// 	options = $trivia.options[Math.floor(Math.random()*$trivia.options.length)];};
	// wordsList[Math.floor(Math.random() * wordsList.length)];

function $introScreen(){
	$(".triviascreen").hide();
	$(".scorescreen").hide();
};



//THIS SHOULD RUN WHEN THE GAME STARTS =======================================================
function gameStart(){
	console.log("gamestart FN works!");
	$(".introscreen").hide();
	$(".triviascreen").show();
		for (var i = 0; i < $trivia.challenge.length; i++) {
			console.log($trivia.challenge[i].question);
		};
		for (var i = 0; i < $trivia.challenge.length; i++) {
			console.log($trivia.challenge[i].answer);
			$(".questiontest").append($trivia.challenge[i].answer);

		};
		for (var i = 0; i < $trivia.options.length; i++) {
			console.log($trivia.options[i]);
			var newradio = $('<input type="radio" name="options-2-here">');
			newradio.val(i);
			newradio.text($trivia.options[i])
			$(".options-2-here").append(newradio);


			// "<label class="radio-inline">
			// (<input type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"> 4
			// </label>"
		}

	$(".q-1-here").html($trivia.challenge[0].question);
	$(".q-2-here").html($trivia.challenge[1].question);
	$(".q-3-here").html($trivia.challenge[2].question);
	$(".q-4-here").html($trivia.challenge[3].question);
	$(".q-5-here").html($trivia.challenge[4].question);
	// $(".options-1-here").html($trivia.challenge[0].answer);
	// $(".options-2-here").html($trivia.challenge[1].answer);
	// $(".options-3-here").html($trivia.challenge[2].answer);
	// $(".options-4-here").html($trivia.challenge[3].answer);
	// $(".options-5-here").html($trivia.challenge[4].answer);

	//debugging


		// For loop to run through questions
			//Done function - Detect if question answered is correct or incorrect
		//only one answer can be selected per question
		//you need to fill area with options; one of those options must = answer
		//you need to capture player guess and input these choices onto .scorescreen items

};

//THIS SHOULD RUN WHEN THE GAME ENDS =========================================================
function gameEnd(){
		console.log("gameend FN works!")
		$(".triviascreen").hide();
		$(".scorescreen").show();
	// RESULTS - Score is displayed with no.Correct && no.Incorrect && no.Unanswered
	$(".correctcount").html("Correct: " + $correctCount);
	$(".incorrectcount").append("Incorrect: " + $incorrectCount);
	$(".blankcount").append("Unanswered: " + $blankCount);
}

//TIMER OBJECT ===============================================================================
// var $timer = "TIMER WORKS!";
	var $timer = {
		remaining: 20,
		reset: function (){
			$timer.remaining = 20;
			$("div.#timer").html("00:20"); //could you do .replaceWith here as well/instead?	
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
			// console.log(converted);
			$("#timer").html(converted); //there seems to be a 1 sec delay
			if ($timer.remaining === 0){
				console.log("time is up!");
				$timer.stop();
				// gameEnd();
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

//======================================= MAIN PROCESS =======================================
//(THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN) ======================================

$(document).ready(function() {
	$introScreen();	


//STARTS GAME WHEN PLAYER CLICKS 'start'======================================================
	// Questions and MC options pop up (append)
	$(".startbutton").on("click", function (){
		gameStart();
		$timer.start();

		// $(".questionone").append(triviaData.qOne);

	});

//When timer runs out || player hits done ====================================================
	$(".donebutton").on("click", function endsGame(){
		$timer.stop();
		gameEnd();
	});

// Closing line of (document).ready ==========================================================
});
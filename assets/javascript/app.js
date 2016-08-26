///////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////////
//// 																		 ////
////  	        Start of the Javascript Game of Thrones Trivia game.         ////
////																		 ////
///////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////////

// Variable declarations for correct/incorrect/no guesses, variable timer set to
// 30 seconds along with a gameCounter to reset the game upon reaching a certain
// threshold value.
var correctGuesses = 0;
var incorrectGuesses = 0;
var noGuesses = 0;
var gameTimer = 30;
var gameCounter = 0;

// Contains the song that plays at the start of the game
var introSong = new Audio("assets/sounds/gameOfThronesIntro.mp4");

// Variable declaration for game of throne images array.
var gameOfThroneImages = [];

gameOfThroneImages[0] = "<img class='imageSize' src='assets/images/1-arya-stark.jpg' alt=''>";
gameOfThroneImages[1] = "<img class='imageSize' src='assets/images/2-orell.jpg' alt=''>";
gameOfThroneImages[2] = "<img class='imageSize' src='assets/images/3-nymeria.jpg' alt=''>";
gameOfThroneImages[3] = "<img class='imageSize' src='assets/images/4-syrio-forel.jpg' alt=''>";
gameOfThroneImages[4] = "<img class='imageSize' src='assets/images/5-lysa-arryn.jpg' alt=''>";
gameOfThroneImages[5] = "<img class='imageSize' src='assets/images/6-bronn.jpg' alt=''>";
gameOfThroneImages[6] = "<img class='imageSize' src='assets/images/7-catelyn-stark.jpg' alt=''>";
gameOfThroneImages[7] = "<img class='imageSize' src='assets/images/8-grey-wind.jpg' alt=''>";
gameOfThroneImages[8] = "<img class='imageSize' src='assets/images/9-kraznyx-mo-nakloz.jpg' alt=''>";
gameOfThroneImages[9] = "<img class='imageSize' src='assets/images/10-tyrion-lannister.jpg' alt=''>";
gameOfThroneImages[10] = "<img class='imageSize' src='assets/images/11-meera-reed.jpg' alt=''>";
gameOfThroneImages[11] = "<img class='imageSize' src='assets/images/12-viserys-targaryen.jpg' alt=''>";
gameOfThroneImages[12] = "<img class='imageSize' src='assets/images/13-jorah-mormont.jpg' alt=''>";
gameOfThroneImages[13] = "<img class='imageSize' src='assets/images/14-rodrik-cassel.jpg' alt=''>";
gameOfThroneImages[14] = "<img class='imageSize' src='assets/images/15-sansa-stark.jpg' alt=''>";

// Variable declaration for the answer choices array which contains an object
// for images, correct answers, and four answer choices.
var answerChoices = [];
answerChoices[0] = {

	img: gameOfThroneImages[0],
	
	thisIsTheCorrectAnswer: "Ayra Stark",

	choiceOne: {
		name:"Ayra Stark",
		isItCorrect: true,
	},
	choiceTwo: {
		name:"Robin Arryn",
		isItCorrect: false,
	},
	choiceThree: {
		name:"Margaery Tyrell",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Sansa Stark",
		isItCorrect: false,
	}
};

answerChoices[1] = {

	img: gameOfThroneImages[1],

	thisIsTheCorrectAnswer: "Orell",

	choiceOne: {
		name:"Stye, Magnar of Thenn",
		isItCorrect: false,
	},
	choiceTwo: {
		name:"Euron Greyjoy",
		isItCorrect: false,
	},
	choiceThree: {
		name:"Rattleshirt, The Lord of Bones",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Orell",
		isItCorrect: true,
	}
};

answerChoices[2] = {

	img: gameOfThroneImages[2],
	
	thisIsTheCorrectAnswer: "Nymeria",

	choiceOne: {
		name:"Nymeria",
		isItCorrect: true,
	},
	choiceTwo: {
		name:"Missandei",
		isItCorrect: false,
	},
	choiceThree: {
		name:"Shaggydog",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Ghost",
		isItCorrect: false,
	}
};

answerChoices[3] = {

	img: gameOfThroneImages[3],
	
	thisIsTheCorrectAnswer: "Syrio Forel",

	choiceOne: {
		name:"Ser Dontos",
		isItCorrect: false,
	},
	choiceTwo: {
		name:"Kyaznys Mo Nakloz",
		isItCorrect: false,
	},
	choiceThree: {
		name:"Syrio Forel",
		isItCorrect: true,
	},
	choiceFour: {
		name:"Illyrio Mopatis",
		isItCorrect: false,
	}
};

answerChoices[4] = {

	img: gameOfThroneImages[4],
	
	thisIsTheCorrectAnswer: "Lysa Arryn",

	choiceOne: {
		name:"Lysa Arryn",
		isItCorrect: true,
	},
	choiceTwo: {
		name:"Catelyn Stark",
		isItCorrect: false,
	},
	choiceThree: {
		name:"Roslin Slynt",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Selyse Baratheon",
		isItCorrect: false,
	}
};

answerChoices[5] = {

	img: gameOfThroneImages[5],
	
	thisIsTheCorrectAnswer: "Bronn",

	choiceOne: {
		name:"Bronn",
		isItCorrect: true,
	},
	choiceTwo: {
		name:"Ser Dontos",
		isItCorrect: false,
	},
	choiceThree: {
		name:"Syrio Forel",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Yoren",
		isItCorrect: false,
	}
};

answerChoices[6] = {

	img: gameOfThroneImages[6],
	
	thisIsTheCorrectAnswer: "Catelyn Stark",

	choiceOne: {
		name:"Lysa Arryn",
		isItCorrect: false,
	},
	choiceTwo: {
		name:"Catelyn Stark",
		isItCorrect: true,
	},
	choiceThree: {
		name:"Selyse Baratheon",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Olenna Tyrell",
		isItCorrect: false,
	}
};

answerChoices[7] = {

	img: gameOfThroneImages[7],
	
	thisIsTheCorrectAnswer: "Grey Wind",

	choiceOne: {
		name:"Pyp",
		isItCorrect: false,
	},
	choiceTwo: {
		name:"Grey Wind",
		isItCorrect: true,
	},
	choiceThree: {
		name:"Shaggydog",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Bowser",
		isItCorrect: false,
	}
};

answerChoices[8] = {

	img: gameOfThroneImages[8],
	
	thisIsTheCorrectAnswer: "Kraznys Mo Nakloz",

	choiceOne: {
		name:"Pyat Pree",
		isItCorrect: false,
	},
	choiceTwo: {
		name:"Missander Navaxos",
		isItCorrect: false,
	},
	choiceThree: {
		name:"Jorah Mormont",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Kraznys Mo Nakloz",
		isItCorrect: true,
	}
};

answerChoices[9] = {

	img: gameOfThroneImages[9],
	
	thisIsTheCorrectAnswer: "Tyrion Lannister",

	choiceOne: {
		name:"Waldor Stark",
		isItCorrect: false,
	},
	choiceTwo: {
		name:"Tywin Frey",
		isItCorrect: false,
	},
	choiceThree: {
		name:"Tyrion Lannister",
		isItCorrect: true,
	},
	choiceFour: {
		name:"Jorah Clegane",
		isItCorrect: false,
	}
};

answerChoices[10] = {

	img: gameOfThroneImages[10],
	
	thisIsTheCorrectAnswer: "Meera Reed",

	choiceOne: {
		name:"Doreah",
		isItCorrect: false,
	},
	choiceTwo: {
		name:"Meera Reed",
		isItCorrect: true,
	},
	choiceThree: {
		name:"Roslin Frey",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Ros",
		isItCorrect: false,
	}
};

answerChoices[11] = {

	img: gameOfThroneImages[11],
	
	thisIsTheCorrectAnswer: "Viserys Targaryen",

	choiceOne: {
		name:"Jon Snow",
		isItCorrect: false,
	},
	choiceTwo: {
		name:"Varys Targaryen",
		isItCorrect: false,
	},
	choiceThree: {
		name:"Viserys Targaryen",
		isItCorrect: true,
	},
	choiceFour: {
		name:"Illyrio Mopatis",
		isItCorrect: false,
	}
};

answerChoices[12] = {

	img: gameOfThroneImages[12],
	
	thisIsTheCorrectAnswer: "Jorah Mormont",

	choiceOne: {
		name:"Bronn",
		isItCorrect: false,
	},
	choiceTwo: {
		name:"Jorah Mormont",
		isItCorrect: true,
	},
	choiceThree: {
		name:"Barristan Selmy",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Baario Naharis",
		isItCorrect: false,
	}
};

answerChoices[13] = {

	img: gameOfThroneImages[13],
	
	thisIsTheCorrectAnswer: "Rodrik Cassel",

	choiceOne: {
		name:"Alliser Thorne",
		isItCorrect: false,
	},
	choiceTwo: {
		name:"Ramsay Snow",
		isItCorrect: false,
	},
	choiceThree: {
		name:"Edmure Tully",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Rodrik Cassel",
		isItCorrect: true,
	}
};

answerChoices[14] = {

	img: gameOfThroneImages[14],
	
	thisIsTheCorrectAnswer: "Sansa Stark",

	choiceOne: {
		name:"Ayra Stark",
		isItCorrect: false,
	},
	choiceTwo: {
		name:"Robin Arryn",
		isItCorrect: false,
	},
	choiceThree: {
		name:"Margaery Tyrell",
		isItCorrect: false,
	},
	choiceFour: {
		name:"Sansa Stark",
		isItCorrect: true,
	}
};

// Ensures that the html page loads before starting JS.
$(document).ready(function(){

	// Calls the intro song upon start of the webpage along with a eternal loop.
	introSong.play();
	introSong.loop = true;

	// Provides a pause/play function upon clicking the pause/play button.
	// Also resets the player timer to 0 upon restarting.
	$(".musicContainer").click(function(){
		if (introSong.paused === false){
			introSong.pause();
			introSong.currentTime = 0;
			$(".musicContainer").html("<img class='mediaButton' src='assets/images/pauseButton.png' alt=''>")
		}else{
			introSong.play();
			introSong.loop = true;	
			$(".musicContainer").html("<img class='mediaButton' src='assets/images/playButton.png' alt=''>")		
		}
	});

	// Upon clicking the start button:
	$("button.startButton").click(function(){
		// Remove the start button, empty the start button header and start text.
		$(".startButton").detach();
		// Remove the class with invisible to reveal answer choices and embed html question text.
		$(".startButtonHeader, .startText").html("");
		$(".invisible").removeClass("invisible");
		$("#headerText").html('Can you guess these Game of Thrones character names on sight?');
		
    	// Upon calling the timer, timer will decrement by 1 second until the gameTimer reaches 0.
		function timer(){
			counter = setInterval(decrement, 1000);
		}
		
		function decrement(){
			gameTimer--;
			
			$(".timer").html("Time Remaining " + gameTimer + " Seconds");

	    	// Once the timer hits 0. Increment i to display new question/images, game counter to
	    	// reach threshold to end the game and noGuesses for not providing an answer.
	    	// Calls the stopForWrongAnswerChoice function.
            if (gameTimer === 0){
				i++
				gameCounter++
				noGuesses++
				stopForWrongAnswerChoiceResults()

            }			
		}

		// Upon call, stops the timer.
		function stop(){
			clearInterval(counter);
		}

		// Upon call, calls the stop function to stop the timer
		// Removes the class inset and add class invisibile to remove the answer choice display
		// Then append the text correct answer and calls the next function stopForResultsTimerStep
		// after 3 seconds has passed.
		function stopForCorrectAnswerResults(){
			stop();
			$(".answerChoices").removeClass("inset");
			$(".answerChoices").addClass("invisible");
			$(".imageBoxContainer").append("<p class='answerText'>That was the correct Answer!</p>");
			setTimeout(stopForResultsTimerStep, 1000 * 3);
		}

		// Has the same result as stopForCorrectAnswerResults function above. Except we provide the
		// correct answer upon the user choosing the wrong answer choice or no answer at all.
		function stopForWrongAnswerChoiceResults(){
			stop();
			$(".answerChoices").removeClass("inset");
			$(".answerChoices").addClass("invisible");
			$(".imageBoxContainer").append("<p class='answerText'>The correct answer was " + "<span id='red'>" + answerChoices[i - 1].thisIsTheCorrectAnswer + "</span>" + ". Better luck next time.</p>");
			setTimeout(stopForResultsTimerStep, 1000 * 3);
		}

		// Upon call, readd the class inset to answer choices and remove clsas invisible from all classes
		// that contains the invisible class. Then detach the answerText and call the functions below
		// To begin the next question/answer choice. Unless the gameCounter is equal to answerChoice.length.
		// If so, paste game results along with restart button.
		function stopForResultsTimerStep(){
			$(".answerChoices").addClass("inset");
			$(".invisible").removeClass("invisible");
			$(".answerText").detach();

			emptyCurrentQuestions();
			gameReset();
			newQuestionContainer();
			resetTimer();
			timer();
		}

		// Upon call, reset the game timer to 30 seconds and display.
		function resetTimer(){
			gameTimer = 30;
			$(".timer").html("Time Remaining " + gameTimer + " Seconds");
		}

		// Starts the timer function upon start of the page.
		timer();

		// Declaration of i variable equal to 0. 
		var i = 0;

		// Upon call, Appends the next image/answer choices to pick from.
		function newQuestionContainer(){	
			$(".imageBoxContainer").append(answerChoices[i].img);

			$(".choiceOne").append(answerChoices[i].choiceOne.name)
				.attr("isItCorrect", answerChoices[i].choiceOne.isItCorrect);

			$(".choiceTwo").append(answerChoices[i].choiceTwo.name)
				.attr("isItCorrect", answerChoices[i].choiceTwo.isItCorrect);

			$(".choiceThree").append(answerChoices[i].choiceThree.name)
				.attr("isItCorrect", answerChoices[i].choiceThree.isItCorrect);

			$(".choiceFour").append(answerChoices[i].choiceFour.name)
				.attr("isItCorrect", answerChoices[i].choiceFour.isItCorrect);
		}

		// At the start of the page. Append the first question choices.
		newQuestionContainer();

		// Upon call, empties out the current image/answer choices.
		function emptyCurrentQuestions(){
			$(".imageBoxContainer").empty()
			$(".choiceOne").empty()
			$(".choiceTwo").empty()
			$(".choiceThree").empty()
			$(".choiceFour").empty()
		}

		// Upon call, if the incremented gameCounter == answerChoice length array.
		// Reset the game entirely and set all variable and timers back to their original values.
		function gameReset() {
			if (gameCounter == answerChoices.length){

				$(".answerChoices").addClass("invisible");
				stop();
				$(".startButtonHeader").html("Game of Thrones Trivia Game!");
				$(".startText").html("<p class='scoreMargins'>Correct Answers: " + correctGuesses + "</p>" + "<p class='scoreMargins'>Incorrect Answers: " + incorrectGuesses + "</p>" + "<p class='scoreMargins'>Unanswers: " + noGuesses + "</p>" + "<p>Click the reset button to start again.</p>");
				$(".timer").html("");
				$("#headerText").html("")
				$(".startButtonContainer").append('<button class="resetButton inset">Reset</button>')

				$(".resetButton").click(function(){
					$(".invisible").removeClass("invisible");
					$("#headerText").html('Can you guess these Game of Thrones character names on sight?');
					$(".startText").html("");
					$(".startButtonHeader").html("");
					$(".resetButton").detach();

					correctGuesses = 0;
					incorrectGuesses = 0;
					noGuesses = 0;
					gameCounter = 0;
					i = 0;
				    emptyCurrentQuestions();
				    newQuestionContainer();
					resetTimer();
					timer();
				});		
			}
		}
		
		// When either of the four answer choices are clicked, call the gameReset function
		// first to see if the incremented gameCounter == answerChoice length array. If it
		// equals, reset the game. If not, continue forward.
		$(".answerChoices").click(function(){

			gameReset();

			// Checks if the current answerChoice is not = undefined. Else do nothing.
			if (answerChoices[i] !== undefined){
				// If this clicked answer choice attr "isItCorrect" = the string "true".
				// Increment i to move on to the next question upon call, gameGameCounter
				// to ensure the game ends upon reaching a certain threshold, correctGuesses
				// to be displayed in the end results. Afterwards call the stopForCorrectAnswerResults
				// function.
				if($(this).attr("isItCorrect") == "true"){
					i++
					gameCounter++
					correctGuesses++
					stopForCorrectAnswerResults();
				
				// If this clicked answer choice attr "isItCorrect" != the string "true".
				// Provide the same results above, excluding the increment of correctGuesses.
				// Instead increment incorrectGuesses to be later displayed at the end of the game.
				}else {
				    i++
				    gameCounter++
				    incorrectGuesses++
				    stopForWrongAnswerChoiceResults();
				}
			}
		});
	});		
});

///////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////////
//// 																		 ////
////  	        Emd of the Javascript Game of Thrones Trivia game.           ////
////																		 ////
///////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////////
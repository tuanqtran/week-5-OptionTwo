var correctGuesses = 0;
var incorrectGuesses = 0;
var noGuesses = 0;
var gameTimer = 5;
var gameCounter = 0;
// var introSong = new Audio("assets/sounds/gameOfThronesIntro.mp4")
var gameOfThroneImages = [];
gameOfThroneImages[0] = "<img class='imageSize' src='assets/images/1-arya-stark.jpg' alt=''>";
gameOfThroneImages[1] = "<img class='imageSize' src='assets/images/2-orell.jpg' alt=''>";
gameOfThroneImages[2] = "<img class='imageSize' src='assets/images/3-nymeria.jpg' alt=''>";
gameOfThroneImages[3] = "<img class='imageSize' src='assets/images/4-syrio-forel.jpg' alt=''>";
// gameOfThroneImages[4] = "<img class='imageSize' src='assets/images/5-lysa-arryn.jpg' alt=''>";
// gameOfThroneImages[5] = "<img class='imageSize' src='assets/images/6-bronn.jpg' alt=''>";
// gameOfThroneImages[6] = "<img class='imageSize' src='assets/images/7-catelyn-stark.jpg' alt=''>";
// gameOfThroneImages[7] = "<img class='imageSize' src='assets/images/8-grey-wind.jpg' alt=''>";
// gameOfThroneImages[8] = "<img class='imageSize' src='assets/images/9-kraznyx-mo-nakloz.jpg' alt=''>";
// gameOfThroneImages[9] = "<img class='imageSize' src='assets/images/10-tyrion-lannister.jpg' alt=''>";
// gameOfThroneImages[10] = "<img class='imageSize' src='assets/images/11-meera-reed.jpg' alt=''>";
// gameOfThroneImages[11] = "<img class='imageSize' src='assets/images/12-viserys-targaryen.jpg' alt=''>";
// gameOfThroneImages[12] = "<img class='imageSize' src='assets/images/13-jorah-mormont.jpg' alt=''>";
// gameOfThroneImages[13] = "<img class='imageSize' src='assets/images/14-rodrik-cassel.jpg' alt=''>";
// gameOfThroneImages[14] = "<img class='imageSize' src='assets/images/15-sansa-stark.jpg' alt=''>";

var answerChoices = [];
answerChoices[0] = {

	img: gameOfThroneImages[0],
	
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

// answerChoices[4] = {

// 	img: gameOfThroneImages[4],
	
// 	choiceOne: {
// 		name:"Lysa Arryn",
// 		isItCorrect: true,
// 	},
// 	choiceTwo: {
// 		name:"Catelyn Stark",
// 		isItCorrect: false,
// 	},
// 	choiceThree: {
// 		name:"Roslin Slynt",
// 		isItCorrect: false,
// 	},
// 	choiceFour: {
// 		name:"Selyse Baratheon",
// 		isItCorrect: false,
// 	}
// };

// answerChoices[5] = {

// 	img: gameOfThroneImages[5],
	
// 	choiceOne: {
// 		name:"Bronn",
// 		isItCorrect: true,
// 	},
// 	choiceTwo: {
// 		name:"Ser Dontos",
// 		isItCorrect: false,
// 	},
// 	choiceThree: {
// 		name:"Syrio Forel",
// 		isItCorrect: false,
// 	},
// 	choiceFour: {
// 		name:"Yoren",
// 		isItCorrect: false,
// 	}
// };

// answerChoices[6] = {

// 	img: gameOfThroneImages[6],
	
// 	choiceOne: {
// 		name:"Lysa Arryn",
// 		isItCorrect: false,
// 	},
// 	choiceTwo: {
// 		name:"Catelyn Stark",
// 		isItCorrect: true,
// 	},
// 	choiceThree: {
// 		name:"Selyse Baratheon",
// 		isItCorrect: false,
// 	},
// 	choiceFour: {
// 		name:"Olenna Tyrell",
// 		isItCorrect: false,
// 	}
// };

// answerChoices[7] = {

// 	img: gameOfThroneImages[7],
	
// 	choiceOne: {
// 		name:"Pyp",
// 		isItCorrect: false,
// 	},
// 	choiceTwo: {
// 		name:"Grey Wind",
// 		isItCorrect: true,
// 	},
// 	choiceThree: {
// 		name:"Shaggydog",
// 		isItCorrect: false,
// 	},
// 	choiceFour: {
// 		name:"Bowser",
// 		isItCorrect: false,
// 	}
// };

// answerChoices[8] = {

// 	img: gameOfThroneImages[8],
	
// 	choiceOne: {
// 		name:"Pyat Pree",
// 		isItCorrect: false,
// 	},
// 	choiceTwo: {
// 		name:"Missander Navaxos",
// 		isItCorrect: false,
// 	},
// 	choiceThree: {
// 		name:"Jorah Mormont",
// 		isItCorrect: false,
// 	},
// 	choiceFour: {
// 		name:"Kraznys Mo Nakloz",
// 		isItCorrect: true,
// 	}
// };

// answerChoices[9] = {

// 	img: gameOfThroneImages[9],
	
// 	choiceOne: {
// 		name:"Waldor Stark",
// 		isItCorrect: false,
// 	},
// 	choiceTwo: {
// 		name:"Tywin Frey",
// 		isItCorrect: false,
// 	},
// 	choiceThree: {
// 		name:"Tyrion Lannister",
// 		isItCorrect: true,
// 	},
// 	choiceFour: {
// 		name:"Jorah Clegane",
// 		isItCorrect: false,
// 	}
// };

// answerChoices[10] = {

// 	img: gameOfThroneImages[10],
	
// 	choiceOne: {
// 		name:"Doreah",
// 		isItCorrect: false,
// 	},
// 	choiceTwo: {
// 		name:"Meera Reed",
// 		isItCorrect: true,
// 	},
// 	choiceThree: {
// 		name:"Roslin Frey",
// 		isItCorrect: false,
// 	},
// 	choiceFour: {
// 		name:"Ros",
// 		isItCorrect: false,
// 	}
// };

// answerChoices[11] = {

// 	img: gameOfThroneImages[11],
	
// 	choiceOne: {
// 		name:"Jon Snow",
// 		isItCorrect: false,
// 	},
// 	choiceTwo: {
// 		name:"Varys Targaryen",
// 		isItCorrect: false,
// 	},
// 	choiceThree: {
// 		name:"Viserys Targaryen",
// 		isItCorrect: true,
// 	},
// 	choiceFour: {
// 		name:"Illyrio Mopatis",
// 		isItCorrect: false,
// 	}
// };

// answerChoices[12] = {

// 	img: gameOfThroneImages[12],
	
// 	choiceOne: {
// 		name:"Bronn",
// 		isItCorrect: false,
// 	},
// 	choiceTwo: {
// 		name:"Jorah Mormont",
// 		isItCorrect: true,
// 	},
// 	choiceThree: {
// 		name:"Barristan Selmy",
// 		isItCorrect: false,
// 	},
// 	choiceFour: {
// 		name:"Baario Naharis",
// 		isItCorrect: false,
// 	}
// };

// answerChoices[13] = {

// 	img: gameOfThroneImages[13],
	
// 	choiceOne: {
// 		name:"Alliser Thorne",
// 		isItCorrect: false,
// 	},
// 	choiceTwo: {
// 		name:"Ramsay Snow",
// 		isItCorrect: false,
// 	},
// 	choiceThree: {
// 		name:"Edmure Tully",
// 		isItCorrect: false,
// 	},
// 	choiceFour: {
// 		name:"Rodrik Cassel",
// 		isItCorrect: true,
// 	}
// };

// answerChoices[14] = {

// 	img: gameOfThroneImages[14],
	
// 	choiceOne: {
// 		name:"Ayra Stark",
// 		isItCorrect: false,
// 	},
// 	choiceTwo: {
// 		name:"Robin Arryn",
// 		isItCorrect: false,
// 	},
// 	choiceThree: {
// 		name:"Margaery Tyrell",
// 		isItCorrect: false,
// 	},
// 	choiceFour: {
// 		name:"Sansa Stark",
// 		isItCorrect: true,
// 	}
// };


$(document).ready(function(){

	// introSong.play();

	// introSong.loop = true;

	$("button.startButton").click(function(){
		$(".startButton").detach();
		$(".startButtonHeader, .startText").html("");
		$(".invisible").removeClass("invisible");
		$("#headerText").html('Can you guess these Game of Thrones character names on sight?');
		
		function timer(){
			counter = setInterval(decrement, 1000);
		}
		
		function decrement(){
			gameTimer--;
	
			$(".timer").html("Time Remaining " + gameTimer + " Seconds");

            if (gameTimer === 0){
				i++
				gameCounter++
				noGuesses++
				emptyCurrentQuestions();
				gameReset();
				newQuestionContainer();
				resetTimer();
            }			
		}

		function stop(){
			clearInterval(counter);
		}

		function resetTimer(){
			gameTimer = 5;
			$(".timer").html("Time Remaining " + gameTimer + " Seconds");
		}

		timer();

		var i = 0;
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

		newQuestionContainer();

		function emptyCurrentQuestions(){
			$(".imageBoxContainer").empty()
			$(".choiceOne").empty()
			$(".choiceTwo").empty()
			$(".choiceThree").empty()
			$(".choiceFour").empty()
		}

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
		
		$(".answerChoices").click(function(){

			gameReset();

			if (answerChoices[i] !== undefined){
				if($(this).attr("isItCorrect") == "true"){
					// console.log($(this).attr("isItCorrect"));
					i++
					gameCounter++
					correctGuesses++
					emptyCurrentQuestions();
					gameReset();
					newQuestionContainer();
					resetTimer();
				}else {
				    // console.log($(this).attr("isItCorrect"));
				    i++
				    gameCounter++
				    incorrectGuesses++
				    emptyCurrentQuestions();
					gameReset();
				    newQuestionContainer();
					resetTimer();
				}
			}
		});
	});		
});

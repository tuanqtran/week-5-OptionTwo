var correctGuesses = 0;
var incorrectGuesses = 0;
var noGuesses = 0;
var gameTimer = 5;

// var introSong = new Audio("assets/sounds/gameOfThronesIntro.mp4")
var gameOfThroneImages = [];
gameOfThroneImages[0] = "<img class='imageSize' src='assets/images/1-arya-stark.jpg' alt=''>";
gameOfThroneImages[1] = "<img class='imageSize' src='assets/images/2-orell.jpg' alt=''>";
gameOfThroneImages[2] = "<img class='imageSize' src='assets/images/3-nymeria.jpg' alt=''>";
gameOfThroneImages[3] = "<img class='imageSize' src='assets/images/4-syrio-forel.jpg' alt=''>";


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
console.log(answerChoices);

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
                stop();
            }			
		}

		function stop(){
			clearInterval(counter);
		}

		function resetTimer(){
			gameTimer = 5;
			$(".timer").html("Time Remaining " + gameTimer + " Seconds");
            if (gameTimer == "0"){
                stop();
            }	
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

		function fiveSeconds() {
		    alert('Times up!');
		}

		setTimeout(fiveSeconds, 1000 * 5);

		$(".answerChoices").click(function(){

			if (answerChoices[i + 1] == undefined){
				// alert("Nothing left");
				$(".answerChoices").addClass("invisible");
				stop();
				// $(".startButtonHeader, .startText").html("");
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

					i = 0;
				    emptyCurrentQuestions();
				    newQuestionContainer();
					resetTimer();

				});
			
			}
			
			// if (setTimeout(fiveSeconds, 1000 * 5) == 0) {
			// 	alert("Times Up!");
			// }


			if (answerChoices[i] !== undefined){
				if($(this).attr("isItCorrect") == "true"){
					setTimeout(fiveSeconds, 1000 * 5);
					console.log($(this).attr("isItCorrect"));
					alert("Yes");
					i++
					correctGuesses++
					emptyCurrentQuestions();
					newQuestionContainer();
					resetTimer();
				}else {
				    console.log($(this).attr("isItCorrect"));
					alert("No");
				    i++
				    incorrectGuesses++
				    emptyCurrentQuestions();
				    newQuestionContainer();
					resetTimer();
				}
				// gameTimer = 5;
				// timer();

			}
		});
	});		
});

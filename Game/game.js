$("img.btn").on("click", function(){
	$("img.btn").toggleClass("pushed");
	setTimeout(function(){
		$("img.btn").toggleClass("pushed");
	});
	$("#info").fadeOut();
	newlevel();
});
function gamePlay(){
	$("img.btn").on("click", function(){
		$(sounds[choice])[0].play();
		$("img.btn").toggleClass("pushed");
		setTimeout(function(){
			$("img.btn").toggleClass("pushed");
		}, 100);
	});
		$("div.btn").on("click", function(){
			var answer= "#"+ this.id;
			check(answer);
		});

}
function gameOver(){
	if(score === 6){
		$("h1").text("congratulations! you win.");
	}
	else{
		$("h1").text("You Scored" + score);
	}
	$("#info").text("press the play button to retry");
	$("#info").fadeIn();
	$("img.btn").off("click").on("click", function(){
		$("img.btn").toggleClass("pushed");
		setTimeout(function(){
			$("img.btn").toggleClass("pushed");
		}, 100);
		initialize();
		$("#info").fadeOut();
		newlevel();
	});
}
function check(answer){
	$(sounds[choice])[0].pause();
	$("div.btn").off("click");
	$(sounds[choice])[0].currentTime= 0;
	if(answer === answers[choice]){
		$("audio#rightSound")[0].play();
		$(answers[choice]).toggleClass("right");
		score++;
		setTimeout(function(){
			$(answers[choice]).toggleClass("right");
		}, 400);
	}
	else{
		$("#wrongSound")[0].play();
		$(answer).toggleClass("wrong");
		$(answers[choice]).toggleClass("right");
		setTimeout(function(){
			$(answer).toggleClass("wrong")
			$(answers[choice]).toggleClass("right")
		}, 400);
	}
	setTimeout(function(){
		$(answers[choice]).fadeOut();
		answers.splice([choice], 1);
		sounds.splice([choice], 1);
		if(answers.length === 0){
			gameOver();
		}
		else{
			newlevel();
		}
	}, 800);
}
function newlevel(){
	$(".img.btn").off("click")
	$("h1").text("score; " + score);
	choice= Math.floor(Math.random()*answers.length);
	$(sounds[choice])[0].play();
	gamePlay()
}
function initialize(){
	score= 0
	answers= ["#dialup", "#vcr", "#camera", "#rotary", "#typewriter", "#polaroid"];
	sounds= ["audio#dialUpSound", "audio#vcrSound", "audio#cameraSound", "audio#rotarySound", "audio#typewriterSound", "audio#polaroidSound"];
	$("div.btn").fadeIn();
}
var choice;
var score= 0;
var answers= ["#dialup", "#vcr", "#camera", "#rotary", "#typewriter", "#polaroid"];
var sounds= ["audio#dialUpSound", "audio#vcrSound", "audio#cameraSound", "audio#rotarySound", "audio#typewriterSound", "audio#polaroidSound"];
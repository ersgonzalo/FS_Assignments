var guessNum;
var chances;
var actualNum;

$(document).ready(function(){
	resetGame();
	
	$('Submit').click(function(){
		checkGame();
	});
});

function checkGame(){
		
		guessNum = parseInt(document.getElementById('mainBox').value);
		
		console.log(guessNum);
		console.log(chances);
		chances--;
		console.log(chances);
		/*
		if(chances === 0){
			//console.log("Sorry, out of tries! Your number was " + actualNum + ".");
			alert("Sorry, you lose!");
			document.getElementById("Submit").disabled = true;
		}
		else{
			numChecker(guessNum);
		}*/
}

function numChecker(){
	
	
	console.log(guessNum);
	
	if((guessNum > 0) || (guessNum < 101)){
		arrowShower();
		switch(guessNum){
			case Math.abs(guessNum - actualNum < 5):
				document.getElementById('numStatus').innerHTML ="Burningly close!";
				break;
			case Math.abs(guessNum - actualNum < 10):
				document.getElementById('numStatus').innerHTML ="You're hotter!";
				break;
			case Math.abs(guessNum - actualNum < 20):
				document.getElementById('numStatus').innerHTML ="Warmer!";
				break;
			default:
				document.getElementById('numStatus').innerHTML ="Chilly.";
		}
		chances--;
		document.getElementById('chanceLeft').innerHTML = chances + "chance(s) left.";
	}
	else{
		alert("Please enter a number between 1 - 100!");
	}

}

function resetGame(){
	chances = 1;
	var actualNum = Math.floor((Math.random() * 100) + 1);
	
	document.getElementById("Submit").disabled = false;
	console.log(chances);
}

function wowTester(){
	document.getElementById("Submit").disabled = true;
}

function arrowShower(){
	if(guessNum > actualNum){
		$('#showTop').show();
		$('#showBot').hide();
	}
	else if(guessNum < actualNum){
		$('#showTop').hide();
		$('#showBot').show();
	}
	else
		prompt("Error!");
}

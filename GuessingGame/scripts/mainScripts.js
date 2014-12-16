var guessNum = 0;
var chances = 5;

function checkGame(){
		if(chances === 0){
			//console.log("Sorry, out of tries! Your number was " + actualNum + ".");
			alert("Sorry, you lose!");
			document.getElementById("Submit").disabled = true;
			break;
		}
		else{
			numChecker();
		}

}

function numChecker(){
	
	guessNum = document.getElementById('mainBox').value;

	if((guessNum > 0) || (guessNum < 101)){
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
	
	chances = 5;
	var actualNum = Math.floor((Math.random() * 100) + 1);

	document.getElementById("Submit").disabled = false; 

}

function wowTester(){

	document.getElementById("Submit").disabled = true;


}

function repeat(phrase, number){

	var repPhrase = "";

	for(c = 0; c < number; c++){

		repPhrase += phrase;

	}

return repPhrase;
}

function join(array, punctuation){

	var arrSum = "";
	
	for(i = 0;i < array.length;i++){
		if (typeof(punctuation) == 'string'){
			if(i < array.length - 1)
				arrSum += (array[i].toString() + punctuation);
			else
				arrSum += array[i].toString();
		}
		else
			arrSum += array[i].toString();
	}

return arrSum;
}

function paramify (hashes){

	var hashSum = "";
	var hashCount = Object.keys(hashes).length

	for (var key in hashes){		
		hashSum += (key + "=" + hashes[key]);
	}

return hashSum;
}

function sum (numbers){

	var numSum = 0;

	for(i = 0;i < numbers.length;i++){
		numSum += numbers[i];
	}
	
return numSum;
}


function factorial(factor){

	var factFact = 1;
	
	for (i = factor;i > 1;i--){
		factFact *= i
	}

return factFact;
}

function concat_string(){

	var stringSum = "";

	for (var i = 0; i < arguments.length;i++)
			stringSum += arguments[i];

return stringSum;
}


function repeat(phrase, number){

	var repPhrase = "";

	for(c = 0; c < number; c++){
		repPhrase += phrase;
	}
	/*
		Could also use array where you push phrase multiple times
			repPhrase = [];
			repPhrase.push(phrase);
			return repPhrase.join("")
	*/

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
		/*
			string+=arr[i]
			if(punctuation && i<array.length-1){
				string += punctuation;
			}

		*/
return arrSum;
}

function paramify (hashes){

	//var params = [];

	var hashSum = "";
	var hashCount = Object.keys(hashes).length

	for (var key in hashes){		
		hashSum += (key + "=" + hashes[key]);
		
	}
	//place below into for...in loop
	//if(hashes.hasOwnProperty(key)){
	//	params.push(key + "=" + hashes[key]);
	//params.sort();
		
//return join(params, "&");
return hashSum;
}

function sum (numbers){

	var numSum = 0;

	for(i = 0;i < numbers.length;i++){
		numSum += numbers[i];
	}
	/*solutionish
		var i = numbers.length;
		//when loop below gets to 0, it stops because 0 is false
		while(i--){
			numSum += numbers[i];
		}
		return numSum

	*/
	
return numSum;
}


function factorial(factor){

	var factFact = 1;
	
	for (i = factor;i > 1;i--){
		factFact *= i
	}
	/*Recursive Method
		function factorial(factor){
			if (n==0) return 1;
			else {
				return n * factorial(n-1);
			}
		}	
	*/
return factFact;
}

function concat_string(){
//No arguements to accept everything
//arguements is its own variable within this function
	//return join(arguements, "");
	//Slice is used for array, 
	var stringSum = "";

	for (var i = 0; i < arguments.length;i++)
			stringSum += arguments[i];

return stringSum;
}

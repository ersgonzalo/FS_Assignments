function countWords (sentence){
	var phrase = sentence.split(" ");
	
return phrase.length;
}

function makeAdder(num){
		
	function adderOf2function(num2){
		return num+num2;
	}
return adderOf2function;

// Solutions	
//  	return function(num){
//  		return num+num2
//  	};
//  	//separate record of num
// 	var addTwo = function(num){
// 		return num+num2;		
// 	}
// 	return addTwo;*/
//
// Closure - allows you to take a variable you take into the function and store it inside
// will work as long as function is alive
}
function forEach(arr, funcToRunOnEachElement){
	//For each element in the array, perform the function on each element of the array 
	//can place len=arr.length inside of for loop => (var i = 0, len = arr.length; i < len; i++)...
	for(var i = 0; i < arr.length;i++){
		funcToRunOnEachElement(arr[i]);
		//to test: {console.log(arr[i])}
	}
}

function map(arr, funcToRunOnEachElement){

	var newMapArray = [];
	forEach(arr, function(el){
		var result = funcToRunOnEachElement(el);
		newMapArray.push(result);
	});
	return newMapArray;
	
}

function filter(arr, filterCheckFunc){

	var newMapArray = [];
	arr.forEach(function(el){
		if(filterCheckFunc(el)){
			newMapArray.push(el);
		}
	});
	return newMapArray;
}

function contains(arrObj, valueToFind){
//needs to handle objects or arrays
	for (var key in arrObj){
		if (arrObj.hasOwnProperty(key)){
			if(arrObj[key] === valueToFind){
				return true;
			}
		}
	}
	return false;
}

var reduce = function (array, startVal, iteratingFunc){
	
	var currentVal = startVal;

	forEach(array, function(el){
		currentVal = iteratingFunc(currentVal,el);
	});

return currentVal;
};

var countWordsInReduce = function(currentVal, nextVal){
	//calls from function above 
	return currentVal + countWords(nextVal);
};


var sum = function(arr){
	var addIterator = function(currentVal, nextEl){
		return currentVal + nextEl;
	};
	
	var solution = reduce(arr, 0, addIterator);
	return solution;
};
// //extra thing
// var subtract = function(arr){
// 	var subIter = function(currentVal, nextElem)

// }

//for function name(thing){} is above all others, better for classes 
//var name = function(){} is more restrictive, functional definition

var every = function(array, elementCheck){
//checker converts value to true or false
	
	var iterator = function(currentVal, nextEl){
		return currentVal && elementCheck(nextEl)
	}

	return reduce(array, true, iterator);
}

var any = function(array, elementCheck){

	if(typeof elementCheck == "undefined"){
	//passes on boolean value if it is not another type
		elementCheck = function(i){
			return i;
		}
	}
	
	var iterator = function(currentVal, nextEl){
		return currentVal || elementCheck(nextEl)
	}

	return reduce(array, false, iterator);
}


var once = function (funcToRunOnce){
//closure on num, runAlready and funcToRunOnce
	var runAlready = false;
//after this runs once, this function becomes the returned function
	return function(){
		if(!runAlready){
			funcToRunOnce();
			runAlready = true;
		}
	}
}


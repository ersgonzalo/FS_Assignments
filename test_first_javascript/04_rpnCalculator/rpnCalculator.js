function Calculator (){

	this.calcValues = [];
	this.result = 0;

}

Calculator.prototype.push = function (num){
		this.calcValues.push(num);
}

Calculator.prototype.value = function(){
		return this.result;
		//get last number from array/stack
		//return this.numStack[this.numStack.length-1]
}

Calculator.prototype.plus = function(){
		
	var arrLen = this.calcValues.length;
	//var num1 = this.numStack.pop(); .pop() takes last element off array
	//var num2 = this.numStack.pop(); 

	if(arrLen >= 2){
		this.result = this.calcValues[arrLen - 2] + this.calcValues[arrLen - 1];
	this.calcValues.splice(arrLen-2,2,this.result);
		//this.numStack.push(result);
	}
	else
		throw "calculator is empty";

}

Calculator.prototype.minus = function(){

var arrLen = this.calcValues.length;

	if(arrLen >= 2){
		this.result = this.calcValues[arrLen - 2] - this.calcValues[arrLen - 1];
		this.calcValues.splice(arrLen-2,2,this.result);
	}
	else
		throw "calculator is empty";

}

Calculator.prototype.times = function(){

var arrLen = this.calcValues.length;

	if(arrLen >= 2){
		this.result = this.calcValues[arrLen - 2] * this.calcValues[arrLen - 1];
		this.calcValues.splice(arrLen-2,2,this.result);
	}
	else
		throw "calculator is empty";

}

Calculator.prototype.divide = function(){

var arrLen = this.calcValues.length;

	if(arrLen >= 2){
		this.result = this.calcValues[arrLen - 2] / this.calcValues[arrLen - 1];
		this.calcValues.splice(arrLen-2,2,this.result);
	}
	else
		throw "calculator is empty";

}
/*Optimization
//When making global variable, make sure that nobody else will use it

var CP = Calculator.protoype;

function defineCalcculator(CP){
	//place CalcPrototypes inside
	//no worries about CP overwriting the other functions within
}
defineCalculator(Calculator.prototype);
Reference to real Calculator.prototype;

//Private namespace
(function(CP){

}(Calculator.prototype))

Calculator.prototype.thowErrorIfEmpty = function(){

var arrLen = this.calcValues.length;

	if(arrLen < 2){
		throw "calculator is empty";
		return false
	}
	else
		return true;
}

Calculator.prototype.popAndCompute = function(operationFunc){

var arrLen = this.calcValues.length;
	
	if(arrLen < 2){
		throw "calculator is empty"
		return false;
	}
	else{
		var solution;
		var num1 = this.numStack.pop();
		var num2 = this.numStack.pop();
		
		solution = operationFunc(num1,num2);
		if (operation == "plus") {
			solution = num2 - num1;
		}
		else if (opeartion == "times"){
			...
		}
		this.numStack.push(solution);
	}

}

Calculator.prototype.plus = function(){
	//this.popAndCompute("plus");
	this.popAndComputer(function(a,b){
		return a+b;
	}
}

Another option:
//usually a bad idea because again, will overwrite functions inside
Calculator.prototype = {
	plus: function(){
	},
	minus: function(){
	},
	times: function(){
	},
	divide: function(){
	}
	
}

Calculator.prototype.popper = function (){
	var num1 = this.numStack.pop();
	var num2 = this.numStack.pop();
	return [num1, num2];
}

Calculator.prototype .plus = function(){{
	var poppedNums = this.popper();
	if (poppedNums){
	
	}

}
*/

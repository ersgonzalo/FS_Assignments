function Calculator (){

	this.calcValues = [];
	this.result = 0;

}

Calculator.prototype.push = function (num){
		this.calcValues.push(num);
}

Calculator.prototype.value = function(){
		return this.result;
}

Calculator.prototype.plus = function(){
		
	var arrLen = this.calcValues.length;

	if(arrLen >= 2){
		this.result = this.calcValues[arrLen - 2] + this.calcValues[arrLen - 1];
	this.calcValues.splice(arrLen-2,2,this.result);
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

function Calculator (){
	
	this.total = 0;

	this.value = function (num){
		return this.total;
	};
	this.add = function(num){
		this.total += num;
	};
	this.subtract = function(num){
		this.total -= num;
	};
};
/*
Sloppy syntactial testing leftovers
Calculator.prototype.add = function (num){
		this.total += this.num
};

var Calculator = function(num){

	this.total = 0;

	this.add = function(){
		this.total += this.num;
	}
	this.value = function(){
		return this.total;
	}
};*/

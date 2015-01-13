function Calculator(){

/*
'new' keyword simulates oop, if it says new 'Object', simply create it as above
Constructor is process of creating an object within that function
this.constructor, it is run every time one makes a new calculator
if class is created with this, it takes a lot of memory, if another calculator
there will be 2 copies of each function
if store in prototype, multiple news will access the values in prototype 
if only for instance, then use this
*/	
	this.total = 0;

	this.value = function(num){
		return this.total;
	};
	this.add = function(num){
		this.total += num;
	};
	this.subtract = function(num){
		this.total -= num;
	};
};


/*Prototypes
Calculator.prototype.add = function(num){
		this.total += num;
}

Calculator.prototype.subtract = function(num){
		this.total-= num;
}
*/

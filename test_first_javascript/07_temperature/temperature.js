function f2c (temp){
	return (temp - 32) * 5/9;
}
function c2f (temp){
	return (temp * 9/5) + 32;
}

var Temperature = function(t){
	
	//this.temp = t;
	var temp = t;

	this.setFahrenheit = function(temp){
		this.fahrenheit = function(){
			return temp;
		}
		this.celcius = function(){
			return f2c(temp);
		}
	}
	
	this.setCelcius = function(temp){
		this.celcius = function(){
			return temp;
		}
		this.fahrenheit = function(){
			return c2f(temp);
		}
	}
}

/*

Temperature.prototype.setFahrenheit = function(temp){
	this.fahrenheit = function () {
		return temp;
	}
	this.celcius = function(){
		return f2c(temp);
	}
}

Temperature.prototype.setCelcius = function(temp){
	this.fahrenheit = function(){
		return c2f(temp);
	}
	this.celcius = function(){
		return temp;
	}
}
//Get and Set Methods

this.getF = function(){
	return temp;
}
this.setF = function(t){
	if(typeof t == "number"){
		temp = t;
	}

Temperature.prototype.setFahrenheit = function(temp){
	this.setF(t);
}
Temperature.prototype.fahrenheit = function(temp){
	this.getF(t);
}
Temperature.prototype.setCelcius = function(temp){
	this.setF(t);
}
Temperature.prototype.celcius = function(temp){
	this.getF(t);
}





*/
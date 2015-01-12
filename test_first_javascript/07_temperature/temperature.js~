function f2c (temp){
	return (temp - 32) * 5/9;
}
function c2f (temp){
	return (temp * 9/5) + 32;
}

var Temperature = function(){
	
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


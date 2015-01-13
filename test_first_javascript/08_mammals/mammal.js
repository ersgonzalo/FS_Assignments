var Mammal = function(name){
	this.name = name;
	this.offspring = [];
};
/*
Mammal.prototype = {
	
	sayHello: function(){
		return "My name is " + this.name + ", I'm a Mammal";
	},
	
	haveBaby: function(){
		var child = new Mammal("Baby " + this.name);
		this.offspring.push(child);
		return child;
	}
};
*/
Mammal.prototype.sayHello = function (){
	return "My name is " + this.name + ", I'm a Mammal";
}

Mammal.prototype.haveBaby = function (){
	var babyName = new Mammal("Baby " + this.name);
	this.offspring.push(babyName);
	return babyName;
}

//Cat.prototype = new Mammal();

function Cat(name, color){
	Mammal.call(this, name); 
	// Mammal.apply(this, [name]);
	this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype);
//Cat.prototype = new Mammal(Mammal.prototype)
//Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function (color){
	var kitten = Mammal.prototype.haveBaby.call(this);
	//when call function, 
	kitten.color = color;
	return kitten;

}
/*
function(bcolor){
	var kitten = new Cat(bcolor + "_cat", bcolor);
	kitten.name = "Baby " + this.name;
	this.offspring.push(kitten);
	return kitten;
}
*/
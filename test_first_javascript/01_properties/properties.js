function setSomePropertiesOn(object){
	
	object.x = 7;
	object['y'] = 8

	object.onePlus = function onePlus(number){
		return number+1;	
	}
	

};

	/*
		Primitives(integers, nulls, etc) are pass by values
		Pass by reference are on objects, etc
		could change argument name to object_reference instead of object
		object.[key] would be useful for a dynamic key or if key name is string
			dot notation does not allow for strings
		when variable comes into function, it is reference, if change it into a function
			destroys all reference to it
		must use dot or array notation to modify elements
		Cannot do: obj_reference = {x: 7, y: 8, onePlus: function(number){return x+1}}
	
};
// slides.hackreactor.com
// bianca@hackreactor.com

// Objects and Property Access
// using dot notation add a property name with the value being your actual name

/*
var christo = {};
// christo.name = "christo";
christo.smiles = true;
christo['pets'] = ['bill', 'bob', 'etc']; 
console.log(christo['pets']);
*/


// add onto the object a property that's your favorite color. set its value to true
/*
var color = "green";
user[color] = true;
console.log(user[color]); // outputs true
console.log(user["green"]); // outputs true
*/


// Iterating and Key Stringification

/*
var obj = {};

obj['x'] = 9;
obj['0'] = 'cat';
console.log(obj['x']); // logs 9
console.log(obj['0']); // logs cat
*/

// The for-in loop
// you want to use this only for objects

/*
for(var k in obj) {
	console.log(k); // logs ???. will log either x or 0;
};
*/

// More for-in loop exercises

/*
for(var key in obj) {
	console.log(key); // this will log properties
	console.log(obj[key]); // this will log the value(s)
}
*/

// write a for loop that will print out all the values in the object

/*
var dog = { bark: "woof", color: "black"};

for(var key in dog) {
	console.log(dog[key]);
};
*/

// Arrays

/*
var arr = [];

arr['x'] = 9;
arr[ 0 ] = 'cat';
console.log(arr['x']); // logs 9
console.log(arr[ 0 ]); // logs 'cat'
for (var k in arr) {
	console.log(k); // logs 'x', '0'
}
console.log(arr['length']); // logs 1; same as console.log(arr.length)
*/

/*
var arr = [];

arr['x'] = 9;
arr[ 0 ] = 'cat', arr[1] = 'dog';
console.log(arr['x']); // logs 9
console.log(arr[ 0 ]); // logs 'cat'
for (var k in arr) {
	console.log(k); // logs 'x', '0', '1'
}
console.log(arr['length']); // logs 2

var x = [1, 2, 3, 4]
for(var bird = 0; bird < arr.length; bird++) {
	console.log(x);
};
*/


// Functions as Objects

/*
var fun = function () {

};

fun['x'] = 9;
fun[ 0 ] = 'cat', fun[ 1 ] = 'dog';
console.log(fun['x']);
console.log(fun[ 0 ]);
for (var k in fun) {
	console.log(k);
};
console.log(fun.length);
for( var i = 0; i < fun.length; i++) {
	console.log(i);
}
*/


// Function Invocation

/*
var fun = function(input) {  // the function definition
	console.log(input.toUpperCase());
};

console.log(fun('hi')); // logs 'HI'. invocation is here
console.log(fun.input); // logs undefined. not a property on the function, it's an argument that's accessible only in those brackets
*/


// Invoking a Nameless Function

/*
var fun = function() {
	return 2;
};

var two = fun();
console.log(two); // logs 2
*/


// Parameters, Arguments, and the arguments object

/*
var func = function() { return arguments[0]; };
console.log(func(1,2,3,4,5));
*/

/*
var fun = function(input) {
	console.log(input);
}
fun('hi'); //logs hi
console.log(fun.arguments); // logs null
*/

/*
var fun = function(input) {
	console.log(arguments);
	var innerFun = function(input) {
		console.log(arguments);
	};	
	innerFun('yo'); // logs ['yo']
};
*/

/*
var x = function(y, z) {
	var test = "y";
	console.log(arguments, test);
	var w = function() {
		console.log(arguments, test);
	};
	w(1);
};
*/



// class 2

/*
var christo = {};
christo.smiles = true;
christo['pets'] = ['bill', 'bob', 'etc']; 
*/

var christo = {
	smiles: true,
	pets: ['bill', 'bob', 'etc'],
	friend: {
		name: "bob",
		danceMoves: ["worm", "sprinkler", "twerk"]
	}
};

// write a function that returns all the values in the danceMoves array
// console.log(christo.friend.danceMoves);

var danceMovesShow = function(obj) {
	return obj.friend.danceMoves;
};
console.log(danceMovesShow(christo));


// add the property ~1 to your object and give it the value true
christo['~1'] = true;

// write a function that returns the value of the smiles property
var showSmiles = function(obj) {
	return obj.smiles;
};
console.log(showSmiles(christo));

// write a function that returns the value of the ~1 property
var showProperty = function(obj) {
	return obj['~1'];
}
console.log(showProperty(christo));


// write a function that returns values located at the first index of the pets array
var showPets = function(obj) {
	// return obj['pets'][0]; // same thing as the one right below
	return obj.pets[0];
}
console.log(showPets(christo));

// add a property called friend to your object and whose value is an object literal +
// give your friend object a key called name that has the value of your neighbor's name

christo.friend = {};
christo.friend.name = 'tigger';

var arr = [];
arr.push("roger"); // => ["roger"]
arr.push("john"); // => ["roger", "john"]
arr.unshift("me"); // => ["me", "roger", "john"];
arr[3] = "you"; // => ["me", "roger", "john", "you"]
arr.push("electric slide");
arr.push("the python");
arr.push("the penguin");

// write a function that returns the length of the danceMoves array
var movesLength = function(obj) {
	return obj.length;
};
console.log(movesLength(arr));












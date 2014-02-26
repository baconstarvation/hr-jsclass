// slides.hackreactor.com

// Objects and Property Access
// using dot notation add a property name with the value being your actual name

var user = {};
user.name = "anthony";
user.age = "26";
console.log(user);

// add onto the object a property that's your favorite color. set its value to true
var color = "green";
user[color] = true;
console.log(user[color]); // outputs true
console.log(user["green"]); // outputs true


// Iterating and Key Stringification

var obj = {};

obj['x'] = 9;
obj['0'] = 'cat';
console.log(obj['x']); // logs 9
console.log(obj['0']); // logs cat

// The for-in loop
// you want to use this only for objects

for(var k in obj) {
	console.log(k); // logs ???. will log either x or 0;
};

// More for-in loop exercises

/*
for(var key in obj) {
	console.log(key); // this will log properties
	console.log(obj[key]); // this will log the value(s)
}
*/

// write a for loop that will print out all the values in the object
var dog = { bark: "woof", color: "black"};

for(var key in dog) {
	console.log(dog[key]);
};









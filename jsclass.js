// slides.hackreactor.com

// Objects and Property Access
// using dot notation add a property name with the value being your actual name

/*
var user = {};
user.name = "anthony";
user.age = "26";
console.log(user);
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











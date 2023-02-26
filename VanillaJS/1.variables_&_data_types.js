const myNumber = 4; // a number
const myFloatingNumber = 2.2; // a floating point
const myBoolean = true; // either true or false


// Two more advanced types in JavaScript
// An array and an object
const myArray = []; // an array
const myObject = {}; // an object


// Two special types called undefined and null

/*
	When a variable is used without first defining a value for it,
	it is equal to undefined.
	For example
*/
const newVariable;
console.log(newVariable); // prints undefined

/*
	The null is a different type of value,
	and is used when a variable should marked as empty.
	undefined can be used for this purpose, but it should not be used.
*/
const emptyVariable = null;
console.log(emptyVariable);


/*
	Exercise

	1. A number called myNumber which contains the number 4.
	2. A string called myString which contains the sentence "Variables are great."
	3. A boolean called myBoolean which contains the value false
*/
const myNumber = 4;
const myString = "Variables are great.";
const myBoolean = false;

console.log("myNumber is equal to " + myNumber);
console.log("myString is equal to " + myString);
console.log("myBoolean is equal to " + myBoolean);
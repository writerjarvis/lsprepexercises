/* Modify the age.js program you write in the exercises for the Input/Output chapter
The updated code should use a for loop to display the future ages

Answer below: */

let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
	for (let future = 10; future <= 40; future += 10) {
		console.log(`In ${future} years, you will be ${age + future} years old. `);
	}
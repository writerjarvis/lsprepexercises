/* In the exercises for the previous chapter, you wrote a dynamic greter program named greeter.js.
Add a function to this program that solicits the user's first and last names in separate invocations;
the function should return the approriate name as a string. Use the return values.

Hint: You need to pass a prompt argument to the function */

// Answer below 

function getName(prompt)	{
	let readlineSync = require('readline-sync');
	let name = readlineSync.question(prompt);
	return name;
}

let firstName = getName('What is your first name? ');
let secondName = getName('What is your last name? ');
console.log(` Hello, ${firstName} ${secondName}! `);
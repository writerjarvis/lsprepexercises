/* Lets improve our previous implementation of evenOrOdd.
Add a vaildation check to ensure that the argument is an integer. 
If it isn't, the function should issue an error message and return.

Hint: You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise. */

// Answer below

function evenOrOdd(number)	{
	if (!Number.isInteger(number)) {
		console.log('Sorry, the value you passed is not an integer');
		return;
	}

if (number % 2 === 0) {
	console.log('even');
	} else {
	console.log('odd');
	}
}

/* Write a function that computs and returns the factorial of a number by using a for loop.
The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:

n!	expansion				    	result
1!	1									      1
2!	1 * 2							      2
3!	1 * 2 * 3 							6
4!	1 * 2 * 3 * 4					  24
5!	1 * 2 * 3 * 4 * 5				120

Answer below */

function factorial(number)	{
	let result = 1;
	for(let counter = number; counter > 0; counter -= 1)	{
		result *= counter;
}
	return result;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(10));
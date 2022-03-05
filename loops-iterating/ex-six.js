/* Reimplement the factorial function from exercise 2 using recursion. 
Once again, you may assume that the arugment is always a positive integer. */

function factorial(number)	{
	if (number === 1) {
		return 1;
	}

	return number * factorial(number - 1);
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
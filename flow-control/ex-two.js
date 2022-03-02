/* Write a function, evenOrOdd, that determines wheter its argument is an even number.
If it is, the function shoudl log 'even' to the comsole; othersie, it should log 'odd'.
For now, assume that the argument is always an integer. 

Hint 1: A number is even if you can divide it by two with no ro remainder.
Hint 2: You can use the % remainder operator shown in The Basics chapter to determien the remainder */ 

// answer below

function evenOrOdd(number)	{
	if (number % 2 === 0)	{
		console.log('even');
	 } else {
		 console.log('odd');
	 }
	}



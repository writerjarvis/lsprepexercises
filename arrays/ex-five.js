/* Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array.
Use the filter method in your function */

function findIntegers(array)	{
	return array.filter(function(element)	{
		return Number.isInteger(element);
	});
}
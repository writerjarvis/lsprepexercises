/* Write a function that seaarches an array of strings for every element that matches the regular expresion given by its argument.
The function should return all matching elements in an array. 

Answer below: */

let words = [
	'laboratory',
	'experiment',
	'flab',
	'Pans Labyrinth',
	'elaborate',
	'polar bear',
];

function(allMatches(words, pattern)	{
	let matches = [];
	for (let index = 0; index < words.length; index += 1)	{
		if (pattern.test(words[index]))	{
			matches.push(words[index]);
	}
}

return matches;
}

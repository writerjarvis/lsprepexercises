/* Create a function that creates and returns a copy of an object. 
The function should take two arguments: the object to copy and an array of the keys that you want to copy.
Do not mutate the original object.

The function shoudl let you omit the array of keys arguement when calling the function.
If you do omit the argumentm, the function should copy all the existing keys from the object.

answer below:			*/

function copyObj(sourceObject, keys) {
	let destinationObject = {};

	if (keys)	{
		keys.forEach(function(key)	{
			destinationObject	[key] = sourceObject [key];
		});

	return destinationObject;
} else {
	return Object.assign(destinationObject, sourceObject);
	}
}

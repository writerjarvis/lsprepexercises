/* Add a qux property with value 3 to the myObj object we created in the previous exercise.
Now, examine the following code snippets:

Snippet 1:

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

Snippet 2:

for (let key in myObj) {
  console.log(key);
}

Without running this code, can you determine whether these two snippets produce the same output? Why?

Answer below:

snippet 1 iterates over myObj's own properties so only logs qux.
snippet 2 logs qux, foo and bar, but for in iterates over all of the object's keys, including those in the prototype object.
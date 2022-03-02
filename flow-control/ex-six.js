/* What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);			*/

/* Answer below

It outputs 'Not Empty'.
The array is empty is has no elements and the length property is 0 so it isn't falsy.
Therefore JS executes the first if statement
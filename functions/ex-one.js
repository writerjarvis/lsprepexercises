/* What does this code log to the console?
Does executing the foo function affect the output?
Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);  								*/ 

/* Answer below

It log '1' to the console, fooo() doesn't affect the output as it is not inside the block */



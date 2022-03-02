/* Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

What does this program log to the console, why? */

/* Answer below

It logs 'bar' as on line 1 we declare a variable foo = 'bar',
we then have a block on line 3 but comsole.log is not available in the block 
so it skips this and logs 'bar' */

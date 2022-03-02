/* Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO); */

/* Answer below

No, on line 1 we assing 'bar' to the const FOO.
On lines 2 - 4 we have a block so this does not impact line 1.
hence on line 6 it will log 'bar to the console. */
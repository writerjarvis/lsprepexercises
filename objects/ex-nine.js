/* What does the following program log to the console? Why? 

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

Answer below:

The program logs 'hi' and 'hello', this is becasue the objects are mutable. Strings and other primitives are not.



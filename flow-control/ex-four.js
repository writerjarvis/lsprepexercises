/* What does the following code log to the conosle, and why? 

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');				*/

/* Answer below:

It will output:
Product 2 
Product 3
Prouduct not found!

The switch statement doesn't have break statements, so it matches the case 113 and executes the code.
But we would need a break statement after each clause to stop JavaScript from continuing to execute any more code.
 
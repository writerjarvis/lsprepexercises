/* Write a dyanic greet program named greeter.js.
The program should ask for your name, then output 'Hello, {name}! where {name} is the name you've entered */

// answer below

let rlSync = require('readline-sync');
let name = rlSync.question("What's your name? ");
console.log(`Hello ${name}! `);
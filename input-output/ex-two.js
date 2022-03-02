/* Modify ex-one.js program to ask for the users's first and last names separately,
then greet the user with their full name */

// answer below

let rlSync = require ('readline-sync');
let firstName = rlSync.question("What's your first name? ");
let secondName = rlSync.question("What's your surname? ");
console.log(`Hello, ${firstName} ${secondName}! `);
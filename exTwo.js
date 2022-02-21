/* Use the arithmetic operators to determien the individual digits of a 4-digit number like 4936
Thousands place is 4
Hundreds place is 9
Tens place is 3
Ones place is 6  */

let number = 4936;
let ones = number % 10
ones

number = (number - ones) / 10

let tens = number % 10
tens

number = (number - tens) / 10

let hundreds =  number % 10
hundreds

let thousands = (number - hundreds) / 10
thousands

console.log(ones);
console.log(tens);
console.log(hundreds);
console.log(thousands);
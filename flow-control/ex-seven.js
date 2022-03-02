/* Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longger than 10 characters.
Otherwise it should return the original string.

Answer below */

function capsLong(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capsLong("Jarvis"));
console.log(capsLong("Tommy hasaproperlongname"));
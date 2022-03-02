/* Refactor this statement to use an if statement instead

return foo() ? 'bar' : qux();			*/

// Answer below

if (foo()) {
  return 'bar';
} else {
  return qux();
}
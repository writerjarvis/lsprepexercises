/* The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

Answer below:

On line 3 we assign 1 to counter inside the conditional part of the while loop.
JS will always return 1 so the loop condition never becomes false.
The code on line 7 never becomes true since the assignment on line 3 ensures that counter is always equals to 2 when we execute on line 7 */

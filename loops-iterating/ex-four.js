/* Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

answer below:

No it does not produce an error, the console will log 1, 2, 3, 4, 5 and then undefined. 
It doesn't give an error as all 3 components of the for loop are optional, not mandatory.
On the line after we increment the loop variable on line 2. 
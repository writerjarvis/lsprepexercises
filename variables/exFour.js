// What happens when you run the following code, why? 

/* const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME); */

/* Answer below

Line 1 assigns a constant variable to NAME which is 'Victor'.
So lines 2,3 and 4 will log to the console with greeting messages + 'Victor'
On line 6 we get an error as we try to reassing a const variable to 'Joe'.
As const variables cannot be reassigned, we will get an error. */
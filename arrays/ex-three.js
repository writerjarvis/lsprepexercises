/*  Log all of the even values fom myArray to console.

 let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
	[9, 17, 16, 0], ];

answer below:	*/

let myArray = [ 
								[1, 3, 6, 11],
								[4, 2, 4],
							  [9, 17, 16, 0],
						 ];

for (let k = 0; k < myArray.length; k += 1)	{
	for (let l = 0; l < myArray[k].length; l += 1)	{
	let value = myArray[k][l];
	if (value % 2 === 0)	{
			console.log(value);
		}
	}
}
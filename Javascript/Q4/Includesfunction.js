/*Q4.Declare a varibale and assign string value to it and check if the string contains a word Script 
using includes() method.*/

//Declare variables
let Fullname="Priti Vaibhav Manwatkar";
let LastName1="Manwatkar";
let LastName2="Sonpethkar";
let FirstName="Priti";

console.clear();
//Use of includes function
console.log(`"${Fullname}" includes "${LastName1}"? : ${Fullname.includes(LastName1)}`);
console.log(`"${Fullname}" includes "${LastName2}"? : ${Fullname.includes(LastName2)}`);
//use of start looking at parameter in includes function
console.log(`"${Fullname}" includes "${FirstName}" at 5 position? : ${Fullname.includes(FirstName,5)}`);
console.log(`"${Fullname}" includes "${FirstName}" at 0 position? : ${Fullname.includes(FirstName,0)}`);
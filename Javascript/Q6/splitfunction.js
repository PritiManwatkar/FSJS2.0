/*Q6.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.*/

//Declare variables
let Companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

//Use of split function
console.clear();
let Cnames=Companies.split(",");// after comma (",") split the string 
console.log(`Company names: ${Cnames}\n`);
console.log(`First Company: ${Cnames[0]}`);
console.log(`Last Company: ${Cnames[Cnames.length-1]}`);


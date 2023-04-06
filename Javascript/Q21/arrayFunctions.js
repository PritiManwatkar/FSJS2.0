/*Q21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
 If it does not exist add to the countries list.*/

let countrynames1=['India','Australia','Brazil','Canada','France'];
let countrynames2=['Madagascar','Bangladesh','China','Ethiopia','Denmark','Finland'];
let country;
console.clear();
console.log(`Country array1 is: ${countrynames1}`);
country=countrynames1.find(element => element == 'Ethiopia');
country?console.log(`${country.toUpperCase()}`):countrynames1.push('Ethiopia');
console.log(`Country array1 is: ${countrynames1}`);

console.log(`Country array2 is: ${countrynames2}`);
country=countrynames2.find(element => element == 'Ethiopia');
country?console.log(`${country.toUpperCase()}`):countrynames2.push('Ethiopia');
console.log(`Country array2 is: ${countrynames2}`);
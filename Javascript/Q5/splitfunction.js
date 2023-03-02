/*Q5.Declare a varibale and assign string value to it and then split it into an array using split() method.*/

//Declare variables
let Fullname="Priti Vaibhav Manwatkar,Sonpethkar";

//Use of split function
console.clear();
let names1=Fullname.split(" ");// after space (" ") split the string 
console.log(`FirstName: ${names1[0]}\nMiddleName: ${names1[1]}\nLastName: ${names1[2]}\n`);
let names2=Fullname.split(",");// after comma (",") split the string 
console.log(`FullName: ${names2[0]}\nLastName2: ${names2[1]}\n`);
let names3=Fullname.split(" ",2);// after space (" ") split the string upto 2 values
console.log(`FirstName: ${names3[0]}\nMiddleName: ${names3[1]}\nLastName: ${names3[2]}\n`);

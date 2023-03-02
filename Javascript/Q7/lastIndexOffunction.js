/*Q7.Declare an array containing the multiple values and use lastIndexOf to determine the position of the 
first and last occurrence of a word "pw skills".*/

//Declare variables
let Companies=['Facebook', 'Google','pw skills', 'pw skills', 'Apple','pw skills', 'IBM', 'Oracle', 'Amazon'];
let myCompany="pw skills";
//Use of indexof and lastIndexOf function
console.clear();
console.log(`"${myCompany}" occurs first at position: ${Companies.indexOf(myCompany)}\n`);
console.log(`"${myCompany}" occurs last at position: ${Companies.lastIndexOf(myCompany)}\n`);
//finding first occurance of word using lastindexof function
let lastindex=0;
let firstindex=0;
let searchfrom=Companies.length;//start searching from last index
do{
    lastindex=Companies.lastIndexOf(myCompany,searchfrom);
    searchfrom=lastindex-1;//reduce the "searching from" index to lastindex-1
    if(lastindex>=0)//if lastindex is not negative, then replace firstindex with new lastindex
    {
        firstindex=lastindex;
    }
    }while(lastindex>=0)//continue the loop till lastindex is not negative
console.log(`"${myCompany}" occurs first at position: ${firstindex}\n`);



/*Q24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 
(0 and 100 included).*/

let oddArr=[];
let evenArr=[];
for(i=0;i<=100;i++)
{
    if(i%2==0)
    {
        evenArr.push(i);
    }
    else
    {
        oddArr.push(i);
    }
}
console.clear();
console.log(`Even array is: ${evenArr}`);
console.log(`Odd array is: ${oddArr}`);

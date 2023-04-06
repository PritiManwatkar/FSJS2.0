/*Q14. Even numbers are divisible by 2 and the remainder is zero. 
How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number 
is even or odd.*/
let num=window.prompt("Enter any number:");
let validnum=parseInt(num);
if(validnum.toString().length==num.length && num%2==0)//check if interger and even
{
    alert(num+'is a even number!');
}
else if(validnum.toString().length==num.length && num%2!=0)//check if interger and odd
{
    alert(num+'is a odd number!');
}
else
{
    alert('Please enter valid number!');
}



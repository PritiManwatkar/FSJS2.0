/*Q13. Get user input using prompt(“Enter your age:”). 
If user is 18 or older , give feedback:'You are old enough to drive' 
but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.*/
let userage=window.prompt("Enter your age:");
if(/^[0-9]+$/.test(userage) && userage>=18)//check if interger greater than 18
{
    alert('You are old enough to drive.');
}
else if(/^[0-9]+$/.test(userage))//check if interger
{
    let noofyears=18-userage;
    alert('You need to wait for '+noofyears+' years to drive.');
}
else if(/^[0-9]+\.[0-9]+$/.test(userage))//check if float
{
    alert('Please enter valid age in years!');
}
else
{
    alert('Please enter valid age!');
}







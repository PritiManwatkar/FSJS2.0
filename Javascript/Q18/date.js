/*Q18. Write a program which tells the number of days in a month, now consider leap year.*/

let month=window.prompt("Enter month(in number):");
let validmonth=parseInt(month);
if(validmonth.toString().length==month.length && month<=12 && month>=1)
{
    const datevalue=new Date(2024,month,0);
    alert('Days in month '+month+' for year 2024 which is leap year are: '+datevalue.getDate());
}
else
{
    alert('Invalid month value passed!');
}





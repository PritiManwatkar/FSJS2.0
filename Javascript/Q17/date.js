/*Q17. Write a program which tells the number of days in a month.*/

let month=window.prompt("Enter month(in number):");
let validmonth=parseInt(month);
if(validmonth.toString().length==month.length && month<=12 && month>=1)
{
    const datevalue=new Date(new Date().getFullYear(),month,0);
    alert('Days in month '+month+' are: '+datevalue.getDate());
}
else
{
    alert('Invalid month value passed!');
}





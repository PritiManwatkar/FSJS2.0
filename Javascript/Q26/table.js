/*Q26. Write a program to print the table of any number given by the user. The format of the output should be 
smiliar to the below example-
	If the number given by the user is 2 then the output should look like this-
	2 * 1 = 2
	2 * 2 = 4
	2 * 3 = 6 and so on till 2 * 10 = 20.*/
function printTable()
{
	let num=document.getElementById("num1").value;
	let numvalid=parseFloat(num);
	document.getElementById("tblLabel").innerText="";
	document.getElementById("divTable").innerHTML="";
	if(num.length!=0)
	{
		if(numvalid.toString().length==num.length)
		{
			document.getElementById("tblLabel").innerText="Table of "+num+" is: ";
			for(let i=1; i<=10;i++)
			{
				document.getElementById("divTable").innerHTML=document.getElementById("divTable").innerHTML+"<br/>"+num+" * "+i+" = "+(num*i);
			}
		}
		else
		{
			document.getElementById("tblLabel").innerText="Please enter a valid number!";
			document.getElementById("divTable").innerHTML="";
		}
	}
	else
	{
		document.getElementById("tblLabel").innerText="Number can not be blank!";
		document.getElementById("divTable").innerHTML="";
	}
}
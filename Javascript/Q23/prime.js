/*Q23. Write a program to check that the number given by the user is a prime number or not.*/
function printPrime()
{
	let num=document.getElementById("num1").value; 
	let numvalid=parseInt(num);
	document.getElementById("primehead").innerText=num+"";
	if(num.length!=0)
	{
		if(numvalid.toString().length==num.length)
		{
			if(num<=1)
			{
				document.getElementById("primehead").innerText=num+" is not a prime number!";
			}
			else
			{
				let isPrime=true;
				for (let i = 2; i < num; i++) 
				{
					if (num % i == 0) 
					{
						isPrime=false;
						break;
					}
				}
				if (isPrime==true)
				{
					document.getElementById("primehead").innerText=num+" is a prime number!";
				}
				else
				{
					document.getElementById("primehead").innerText=num+" is not a prime number!";
				}
			}
		}
		else
		{
			document.getElementById("primehead").innerText="Please enter a valid number!";
		}
	}
	else
	{
		document.getElementById("primehead").innerText="Number can not be blank!";
	}
}
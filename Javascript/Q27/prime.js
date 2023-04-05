/*Q27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).*/
function printPrime()
{
	let num=document.getElementById("numrange").value; 
	let primeArr = []; 
	for (let i = 2; i <= num; i++) 
	{
		let isPrime=true;
		for (let j = 2; j <i; j++) 
		{
			if (i % j == 0) 
			{
				isPrime=false;
				break;
			}
		}
		if (isPrime==true)
		{
			primeArr.push(i);
		}
	}
	if (primeArr.length>0)
	{
		document.getElementById("primehead").innerText="Prime numbers between 0 to "+num+" are:";
		document.getElementById("primelist").innerHTML="<ol>";
		for(const i of primeArr)
		{
			document.getElementById("primelist").innerHTML=document.getElementById("primelist").innerHTML+"<li>"+i+"</li>";
		}
		document.getElementById("primelist").innerHTML=document.getElementById("primelist").innerHTML+"</ol>";
	}
	else
	{
		document.getElementById("primehead").innerText="No prime numbers exist between this range!";
		document.getElementById("primelist").innerHTML="";
	}
}
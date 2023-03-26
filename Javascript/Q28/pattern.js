/*28. Write a program to print the given patterns using the loops-
	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   ***
	
	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	   ***
	   ***
	   ***

	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   *****/
function printPattern()
{
	document.getElementById("divpattern").innerHTML="";
    let num=document.getElementById("num1").value;
    let radiolist=document.getElementsByName("pattern");
	let pattern= Array.from(radiolist).find(radio => radio.checked).value;
	switch(pattern)
	{
		case "Triangle":
			for(let i=1;i<=num;i++)
    		{
				for(let j=1;j<=i;j++)
				{
        			document.getElementById("divpattern").innerHTML=document.getElementById("divpattern").innerHTML+"*";
				}
				document.getElementById("divpattern").innerHTML=document.getElementById("divpattern").innerHTML+"<br/>";
			}
			break;
		case "Square":
			for(let i=1;i<=num;i++)
    		{
				for(let j=1;j<=num;j++)
				{
        			document.getElementById("divpattern").innerHTML=document.getElementById("divpattern").innerHTML+"*";
				}
				document.getElementById("divpattern").innerHTML=document.getElementById("divpattern").innerHTML+"<br/>";
			}
			break;
		case "Pyramid":
			let i=1;
			let k=1;
			while(i<=num)
    		{
				if(k%2!=0)
				{
					for(let m=(num+1);m>=k;m--)
					{
						document.getElementById("divpattern").innerHTML=document.getElementById("divpattern").innerHTML+"&nbsp;";
					}					
					for(let j=1;j<=k;j++)
					{
						document.getElementById("divpattern").innerHTML=document.getElementById("divpattern").innerHTML+"*";
					}
					document.getElementById("divpattern").innerHTML=document.getElementById("divpattern").innerHTML+"<br/>";
					i++;
				}
				k++;
			}
			break;
	}
    
}

        
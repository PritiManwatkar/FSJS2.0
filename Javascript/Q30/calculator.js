/*Q30. Create a simple calculator program in JavaScript which can perform the addition, substraction, 
multiplication and division on given numbers.*/
let isOperatorfired=false;
let isResultOb=false;
//reset the values of all textboxes 
function reset()
{
	document.getElementById("calctext").value="";
	document.getElementById("typetext").value="0";
	isOperatorfired=false;
	isResultOb=false;
}
//when operator button is pressed
function updateText(btn)
{
	//if equal to button is not fired already
	if(document.getElementById("calctext").value.indexOf('=')<=0)
	{
		//append the expression with new value and new operator
		document.getElementById("calctext").value=document.getElementById("calctext").value+document.getElementById("typetext").value+btn.innerText;
	}
	else
	{
		//set the expression with new calculated value and new operator
		document.getElementById("calctext").value=document.getElementById("typetext").value+btn.innerText;
	}
	//set operator fired to true so that any upcoming number will be considered as new number and will not be appended to existing number
	isOperatorfired=true;
}
//when number button is pressed
function addText(btn)
{
	//save the current number value
	let num=parseFloat(document.getElementById("typetext").value);
	//if current number is not 0 and is proper number and operator button was not fired before it
	if(document.getElementById("typetext").value.length==num.toString().length && num!=0 && isOperatorfired==false && isResultOb==false)
	{
		//append the new number button pressed  to the existing value
		document.getElementById("typetext").value=document.getElementById("typetext").value+btn.innerText;
	}
	else if(isResultOb==true)
	{
		//if operator button is pressed or 0 was already there or incorrect number was given,set new number
		document.getElementById("typetext").value=btn.innerText;
		document.getElementById("calctext").value="";
		isOperatorfired=false;
		isResultOb=false;
	}
	else
	{
		//if operator button is pressed or 0 was already there or incorrect number was given,set new number
		document.getElementById("typetext").value=btn.innerText;
		isOperatorfired=false;
	}
}
//get the result of expression
function getResult(btn)
{
	//get current text
	let currentex=document.getElementById("calctext").value;
	//set complete current erpression in expression textbox
	document.getElementById("calctext").value=document.getElementById("calctext").value+document.getElementById("typetext").value+btn.innerText;
	//evaluate expresssion and show the result
	document.getElementById("typetext").value=eval(currentex+document.getElementById("typetext").value);
	//after calculating result treat next number pressed as new number
	isResultOb=true;
	
}
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

        
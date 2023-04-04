/*Q30. Create a simple calculator program in JavaScript which can perform the addition, substraction, 
multiplication and division on given numbers.*/
let num1=0;
let num2=null;
let operat=null;
let isOperatorfired=false;
let isResultOb=false;
//reset the values of all textboxes 
function reset()
{
	document.getElementById("calctext").value="";
	document.getElementById("typetext").value="0";
	num1=0;
	num2=null;
	operat=null;
	isOperatorfired=false;
	let isResultOb=false;
}
//when backspace button is pressed
function backspace()
{
	if(isOperatorfired==false && isResultOb==false)
	{
		let str=document.getElementById("typetext").value;
		document.getElementById("typetext").value=str.substring(0, str.length-1);
		document.getElementById("calctext").value=str.substring(0, str.length-1);
		num1=str.substring(0, str.length-1);
		if (document.getElementById("typetext").value.length==0)
		{
			document.getElementById("typetext").value=0;
			num1=0;
		}
	}	
	else if(isOperatorfired==true && num2!=null)
	{
		let str=document.getElementById("typetext").value;
		document.getElementById("typetext").value=str.substring(0, str.length-1);
		num2=str.substring(0, str.length-1);
		if (document.getElementById("typetext").value.length==0)
		{
			document.getElementById("typetext").value=0;
			num2=null;
		}
	}
	else if(isResultOb==true)
	{
		document.getElementById("calctext").value="";
	}
	
}
//when operator button is pressed
function operate(btn)
{
	num1.toString().lastIndexOf('.')==num1.toString().length-1?num1=num1.toString().substring(0,num1.toString().length-1):num1=num1;
	//if num1,num2,operator are set
	if(num2!=null && operat!=null)
	{
		num2.toString().lastIndexOf('.')==num2.toString().length-1?num2=num2.toString().substring(0,num2.toString().length-1):num2=num2;
		document.getElementById("calctext").value=eval('('+num1+')'+operat+'('+num2+')')+btn.innerText;
		document.getElementById("typetext").value=eval('('+num1+')'+operat+'('+num2+')');
		num1=document.getElementById("typetext").value;
		operat=btn.innerText;
		num2=null;
	}
	else if(num2==null)
	{
		document.getElementById("calctext").value=num1+btn.innerText;
		document.getElementById("typetext").value=num1;
		operat=btn.innerText;
	}
	isOperatorfired=true;
	isResultOb=false;
}
//when number button is pressed
function setnumber(btn)
{
	//save the current number value
	if(num2==null && isOperatorfired==true)
	{
		num2=btn.innerText;
		document.getElementById("typetext").value=btn.innerText;
	}
	else if(num2!=null)
	{
		num2=num2+btn.innerText;
		document.getElementById("typetext").value=num2;
	}
	else if(num2==null && isOperatorfired==false && isResultOb==false)
	{
		num1!=0?num1=num1+btn.innerText:num1=btn.innerText;
		document.getElementById("calctext").value=num1;
		document.getElementById("typetext").value=num1;
	}
	else if(num2==null && isOperatorfired==false && isResultOb==true)
	{
		num1=btn.innerText;
		document.getElementById("calctext").value=num1;
		document.getElementById("typetext").value=num1;
		isResultOb=false;
	}
}
//get the result of expression
function getResult(btn)
{
	if(isResultOb==false)
	{
		//get current text
		let currentex=document.getElementById("calctext").value;
		let typetext=document.getElementById("typetext").value;
		typetext.toString().lastIndexOf('.')==typetext.toString().length-1?typetext=typetext.toString().substring(0,typetext.toString().length-1):typetext=typetext;
		//set complete current erpression in expression textbox
		document.getElementById("calctext").value=currentex+typetext+btn.innerText;
		//evaluate expresssion and show the result
		document.getElementById("typetext").value=eval(currentex+'('+typetext+')');
		//after calculating result treat next number pressed as new number
		num1=document.getElementById("typetext").value;
		num2=null;
		operat=null;
		isOperatorfired=false;
		isResultOb=true;
	}
}
//add decimal point
function adddecimal()
{
	if(isOperatorfired==false && isResultOb==false)
	{
		let str=document.getElementById("typetext").value;
		if (str.indexOf('.')<0)
		{
			document.getElementById("typetext").value=str+'.';
			document.getElementById("calctext").value=str+'.';
			num1=str+'.';
		}
	}	
	else if(isOperatorfired==true && num2!=null)
	{
		let str=document.getElementById("typetext").value;
		if (str.indexOf('.')<0)
		{
			document.getElementById("typetext").value=str+'.';
			num2=str+'.';
		}
	}
	else if(isResultOb==true)
	{
		document.getElementById("typetext").value='0.';
		document.getElementById("calctext").value='';
		num1='0.';
	}
}
function addsign()
{
	let str=document.getElementById("typetext").value;
	if(isOperatorfired==false && isResultOb==false)
	{
		if (str!=0 && Math.sign(document.getElementById("typetext").value)>0)
		{
			document.getElementById("typetext").value='-'+str;
			document.getElementById("calctext").value='-'+str;
			num1='-'+str;
		}
		else if(str!=0)
		{
			document.getElementById("typetext").value=str.substring(1, str.length);
			document.getElementById("calctext").value=str.substring(1, str.length);
			num1=str.substring(1, str.length);
		}
	}	
	else if(isOperatorfired==true && num2!=null)
	{
		if (str!=0 && Math.sign(document.getElementById("typetext").value)>0)
		{
			document.getElementById("typetext").value='-'+str;
			num2='-'+str;
		}
		else if(str!=0)
		{
			document.getElementById("typetext").value=str.substring(1, str.length);			
			num2==str.substring(1, str.length);
		}
	}
	else if(isResultOb==true)
	{
		if (str!=0 && Math.sign(document.getElementById("typetext").value) > 0)
		{
			document.getElementById("typetext").value='-'+str;
			document.getElementById("calctext").value='-'+str;
			num1='-'+str;
		}
		else if (str!=0)
		{
			document.getElementById("typetext").value=str.substring(1, str.length);
			document.getElementById("calctext").value=str.substring(1, str.length);
			num1=str.substring(1, str.length);
		}
	}
}

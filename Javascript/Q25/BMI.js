/*Q25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old 
or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more*/
function checkBMI()
{
	let weight=document.getElementById("weight").value;
	let height=document.getElementById("height").value;
	let weightvalid=parseFloat(weight);
	let heightvalid=parseFloat(height);
	document.getElementById("bmiLabel").innerText="";

	if(weight.length!=0 && height.length!=0)
	{
		if((weightvalid.toString().length==weight.length) && (heightvalid.toString().length==height.length))
		{
			let bmi=weight/(height*height);
			if(bmi<18.5)
			{
				document.getElementById("bmiLabel").innerText="Your BMI is "+bmi+".You are Underweight!";
			}
			else if(bmi>=18.5 && bmi<=24.9)
			{
				document.getElementById("bmiLabel").innerText="Your BMI is "+bmi+".You have normal weight!";
			}
			else if(bmi>=25 && bmi<=29.9)
			{
				document.getElementById("bmiLabel").innerText="Your BMI is "+bmi+".You are Overweight!";
			}
			else
			{
				document.getElementById("bmiLabel").innerText="Your BMI is "+bmi+".You are Obese!";
			}
		}
		else if(weightvalid.toString().length!=weight.length)
		{
			document.getElementById("bmiLabel").innerText="Please enter valid weight!";
		}
		else
		{
			document.getElementById("bmiLabel").innerText="Please enter valid height!";
		}
	}
	else if(weight.length==0)
	{
		document.getElementById("bmiLabel").innerText="Weight can not be blank!";
	}
	else
	{
		document.getElementById("bmiLabel").innerText="Height can not be blank!";
	}
}
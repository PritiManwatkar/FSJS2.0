/*Q29. Write a javascript program which takes the input of filename as string and prints the extension of the file 
in the console.*/
function getfileExtension()
{
	let strfilename=document.getElementById("txtfilename").value;
	if(strfilename.length==0)
	{
		alert("Please enter file name!");
	}
	else if(strfilename.indexOf('.') < 0)
	{
		alert("Enter full name of file with extension!");
	}
	else if(strfilename.indexOf('.')!=strfilename.lastIndexOf('.'))
	{
		alert("Invalid file name!");
	}
	else
	{
		alert("Extension of file is:"+strfilename.substring(strfilename.lastIndexOf('.'),strfilename.length));
		console.log("Extension of file is:"+strfilename.substring(strfilename.lastIndexOf('.'),strfilename.length));
	}
	
}
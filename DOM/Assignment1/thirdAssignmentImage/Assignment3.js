function task1Output()
{
    let varmain=document.getElementsByClassName("mainWrapper");
    let varinput;
    varinput=varmain[0].querySelectorAll("input[type=text]");
    for(const i of varinput)
    {
	    i.placeholder="FSJS 2.0";
    } 
    varinput=varmain[0].querySelectorAll("input[type=email]");
    for(const i of varinput)
    {
	    i.placeholder="fsjs@ineuron.ai";
    } 
    varinput=varmain[0].querySelectorAll("textarea");
    for(const i of varinput)
    {
	    i.placeholder="Hello World";
    } 
}
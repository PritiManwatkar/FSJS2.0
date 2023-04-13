function removeLanguages()
{
    let vardiv=document.querySelector(".main__languages");
    let vara=vardiv.querySelectorAll("a");
    for(const i of vara)
    {
	    if(i.innerText.includes("2.0"))
        {
            vardiv.removeChild(i);
        }
    } 
    setTimeout(refreshPage, 3000)
}
function refreshPage()
{
    let varinput=document.querySelector(".main__form-input");
    varinput.value="Let us refresh page";
    let varform=document.querySelector("form");
    setTimeout(() => { varform.submit();} , 2000);
}
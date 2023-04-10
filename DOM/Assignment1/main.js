function changePage()
{
    let varul=document.querySelector("ul");
    let varli;
    let varlink;
    varli=varul.querySelectorAll("li");
    varul.removeChild(varli[2]);
    varli=document.createElement("li");
    varlink=document.createElement("a");
    varlink.innerText="Projects";
    varlink.href="#";
    varli.appendChild(varlink);
    varul.appendChild(varli);
    varli=document.createElement("li");
    varlink=document.createElement("a");
    varlink.innerText="Hire Me";
    varlink.href="#";
    varli.appendChild(varlink);
    varul.appendChild(varli);
}
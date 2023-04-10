function task1Output()
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
    let varfooter=document.querySelector("footer");
    varul=varfooter.querySelector("ul");
    varfooter.removeChild(varul);
    varfooter.style.marginRight="700px";
}
function task2Output()
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
    let varfooter=document.querySelector("footer");
    varul=varfooter.querySelector("ul");
    varfooter.removeChild(varul);
    varfooter.style.marginRight="700px";
    varinput=document.getElementsByTagName("input");
    varinput[0].placeholder="Search My Project";
}
function task3Output()
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
    let varspan=document.querySelectorAll("span");
    varspan[2].innerText="an Employee";
    varspan[3].innerText="iNeuron Intelligence Pvt Ltd";
}
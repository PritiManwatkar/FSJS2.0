function changePage()
{
    let varimg=document.querySelector("header .logo");
    varimg.src="./assets/ineuron-logo.png";
    let varappprice=document.querySelector(".app_price span");
    varappprice.innerText="$10";
    let varfooter=document.querySelector(".footer_social");
    let vardiv=document.createElement("div");
    vardiv.className="footer_social_ico";
    varfooter.appendChild(vardiv);
    let vari=document.createElement("i");
    vari.classList="fa-brands fa-linkedin";
    vardiv.appendChild(vari);
}
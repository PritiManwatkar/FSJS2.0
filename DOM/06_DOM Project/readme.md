# This is sixth project on DOM
## The project's purpose is to create same output as that of output files shared without touching given HTML code(index.html).
### DOM P3 SS-1.png and DOM P3 SS-2.png files look like:

![Output expected](./Output/DOM%20P3%20SS-1.png)
![Output expected](./Output/DOM%20P3%20SS-2.png)

### For this following javascript code needs to be written which targets current HTML(index.html) to make it look like DOM P3 SS-1.png and DOM P3 SS-2.png files. 
```javascript
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
```

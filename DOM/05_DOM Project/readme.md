# This is fifth project on DOM
## The project's purpose is to create same output as that of output file shared without touching given HTML code(index.html).
### DOM P2 SS.png file looks like:

![Output expected](./Output/DOM%20P2%20SS.png)

### For this following javascript code needs to be written which targets current HTML(index.html) to make it look like DOM P2 SS.png file. 
```javascript
let varsubscription=document.createElement("a");
varsubscription.href="#";
varsubscription.className="btn";
varsubscription.innerText="Pro Subscription";
let varsibling=document.querySelector(".btn");
varsibling.parentNode.appendChild(varsubscription);
let varmenu=document.createElement("a");
varmenu.href="#";
varmenu.innerText="Chinese (7)";
let varparentsibling=document.querySelector(".text-r");
varparentsibling.nextElementSibling.appendChild(varmenu);
let vardivmain=document.querySelector(".recipe-gallery");
let vardiv=document.createElement("div");
vardiv.className="card";
vardivmain.appendChild(vardiv);
let vara=document.createElement("a");
vara.href="#";
vara.className="recipe-text";
vardiv.appendChild(vara);
let varimg=document.createElement("img");
varimg.className="recipe-img";
varimg.src="./img/main.jpeg";
vara.appendChild(varimg);
let varh5=document.createElement("h5");
varh5.className="recipe-name";
varh5.innerText="Pancake";
vara.appendChild(varh5);
let varp=document.createElement("p");
varp.className="recipe-disp";
varp.innerText="Prep : 10min | Cook : 5min";
vara.appendChild(varp);
vara=document.querySelectorAll(".recipe-text");
for(const i of vara)
{
    i.style.color="#58228F";
} 
let varspan=document.querySelector(".footer-logo");
varspan.nextElementSibling.innerText="Priti Manwatkar";
```

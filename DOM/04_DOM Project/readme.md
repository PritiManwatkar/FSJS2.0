# This is fourth project on DOM
## The project's purpose is to create same output as that of output file shared without touching given HTML code(index.html).
### Task1 - DOM P1 SS.png file looks like:

![Output expected](./Output/DOM%20P1%20SS.png)

### For this following javascript code needs to be written which targets current HTML(index.html) to make it look like DOM P1 SS.png file. 
```javascript
let vardiv=document.querySelector(".clash-card__unit-stats--barbarian");
vardiv.style.backgroundColor="#EC9B3B";
for(const i of vardiv.children)
{
    i.style.color="#FFFFFF";
} 
vardiv=document.querySelector(".clash-card__image--barbarian");
vardiv.children[0].style.margin="16px 0px 0px 30px";
vardiv=document.querySelector(".archer");
vardiv.children[2].innerText="The Archer";
vardiv.children[4].style.backgroundColor="#EE5487";
for(const i of  vardiv.children[4].children)
{
    i.style.color="#FFFFFF";
} 
vardiv=document.querySelector(".clash-card__unit-stats--giant");
vardiv.style.backgroundColor="#F6901A";
for(const i of vardiv.children)
{
    i.style.color="#FFFFFF";
} 
vardiv=document.querySelector(".goblin");
vardiv.children[2].innerText="The Goblin";
vardiv.children[4].style.backgroundColor="#82BB30";
for(const i of  vardiv.children[4].children)
{
    i.style.color="#FFFFFF";
} 
vardiv=document.querySelector(".clash-card__unit-stats--wizard");
vardiv.style.backgroundColor="#4FACFF";
for(const i of vardiv.children)
{
    i.style.color="#FFFFFF";
}     
vardiv=document.querySelectorAll(".clash-card");
let varwizarddesc=vardiv[4].querySelector(".clash-card__unit-description");
console.log(varwizarddesc);
varwizarddesc.style.padding="20px 20px 20px 10px";
for(const i of vardiv)
{
    i.style.width="250px";
    i.style.height="508px";  
    let vardivimg=i.querySelector(".clash-card__image");      
    vardivimg.style.width="250px";
    vardivimg.style.height="180px";      
    vardivimg.children[0].style.width="300px";
    vardivimg.children[0].style.height="250px";
}   
vardiv=document.querySelector(".slide-container");
vardiv.style.gap="35px";
vardiv.style.padding="0px 0px 0px 20px";
```

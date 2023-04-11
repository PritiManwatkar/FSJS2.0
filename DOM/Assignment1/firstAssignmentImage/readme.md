# This is first project on DOM
## The project's purpose is to create same output as that of output files shared without touching given HTML code(index.html).
### Task1 - task1Output.png file looks like:

![Output expected](./task1Output.png)

### For this following javascript code needs to be written which targets current HTML(index.html) to make it look like task1Output.png file. 
```javascript
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
```
### Task2 - task2Output.png file looks like:

![Output expected](./task2Output.png)

### For this following javascript code needs to be written which targets current HTML(index.html) to make it look like task2Output.png file. 
```javascript
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
```
### Task3 - task3Output.png file looks like:

![Output expected](./task3Output.png)

### For this following javascript code needs to be written which targets current HTML(index.html) to make it look like task3Output.png file. 
```javascript
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
```
### Task4 - task4Output.png file looks like:

![Output expected](./task4Output.png)

### For this following javascript code needs to be written which targets current HTML(index.html) to make it look like task4Output.png file. 
```javascript
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
let varimg=document.querySelector("img");
varimg.src="./firstAssignmentImage/task4img.png";
```
### Task5 - task5Output.png file looks like:

![Output expected](./task5Output.png)

### For this following javascript code needs to be written which targets current HTML(index.html) to make it look like task5Output.png file. 
```javascript
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
let varbtn=document.createElement("button");
varbtn.innerText="Support Me";
let vardiv=document.getElementsByClassName("hero-right-section-btns");
vardiv[0].appendChild(varbtn);
```
# This is first project on DOM
## The project's purpose is to create same output as that of output files shared without touching given HTML code(index.html).
### Task1 task1Output.png file looks like:

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
```

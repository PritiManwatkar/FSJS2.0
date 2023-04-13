# This is seventh project on DOM
## The project's purpose is to create same output as that of output files shared without touching given HTML code(index.html).
### ass7.1-after.png file looks like:

![Output expected](./ass7.1-after.png)

### For this following javascript code needs to be written which targets current HTML(index.html) to make it look like ass7.1-after.png file. 
```javascript
let vardiv=document.querySelector(".main__languages");
let vara=vardiv.querySelectorAll("a");
for(const i of vara)
{
	if(i.innerText.includes("2.0"))
    {
        vardiv.removeChild(i);
    }
}
```
### ass7.2-after.png file looks like:

![Output expected](./ass7.2-after.png)

### For this following javascript code needs to be written which targets current HTML(index.html) to make it look like ass7.2-after.png file. 
```javascript
let varinput=document.querySelector(".main__form-input");
varinput.value="iNeuron";
let varform=document.querySelector("form"); 
varform.submit();
```
# This is third project on DOM
## The project's purpose is to create same output as that of output files shared without touching given HTML code(contact.html).
### Task1 - task1Output.png file looks like:

![Output expected](./task1Output.png)

### For this following javascript code needs to be written which targets current HTML(contact.html) to make it look like task1Output.png file. 
```javascript
let varmain=document.getElementsByClassName("mainWrapper");
let varinput;
varinput=varmain[0].querySelectorAll("input[type=text]");
for(const i of varinput)
{
	i.placeholder="FSJS 2.0";
} 
varinput=varmain[0].querySelectorAll("input[type=email]");
for(const i of varinput)
{
	i.placeholder="fsjs@ineuron.ai";
} 
varinput=varmain[0].querySelectorAll("textarea");
for(const i of varinput)
{
	i.placeholder="Hello World";
} 
```
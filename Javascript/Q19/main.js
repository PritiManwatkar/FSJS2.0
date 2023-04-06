/*Q19. Create a countries.js file and store the countries name into this file, 
create a file web_techs.js and store the popular web technology names into this file. 
Access both file in a third file named main.js*/

import{countrynames}from './countries.js';
import{webtechs}from './web_techs.js';
document.getElementById("lblCountry").innerText=document.getElementById("lblCountry").innerText+" "+countrynames;
document.getElementById("lblWebtech").innerText=document.getElementById("lblWebtech").innerText+" "+webtechs;
console.log(countrynames);
console.log(webtechs);
console.log(webtechs[0]);







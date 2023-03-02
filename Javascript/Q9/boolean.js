/*Q9. Boolean value is either true or false.
    - Write three JavaScript statement example which provide truthy value.
    - Write three JavaScript statement example which provide falsy value.*/
console.clear();
let x=[];
let y=null;
let z;
//Truthy values
'false' ?  console.log("This is truthy value!") :  console.log("This is falsy value!");
'0' ?  console.log("This is truthy value!") :  console.log("This is falsy value!");
x ?  console.log("This is truthy value!") :  console.log("This is falsy value!");

//Falsy values
false ?  console.log("This is truthy value!") :  console.log("This is falsy value!");
0 ?  console.log("This is truthy value!") :  console.log("This is falsy value!");
"" ?  console.log("This is truthy value!") :  console.log("This is falsy value!");
y ?  console.log("This is truthy value!") :  console.log("This is falsy value!");
z ?  console.log("This is truthy value!") :  console.log("This is falsy value!");
console.log(parseInt("No integers here"));
parseInt("No integers here")  ?  console.log("This is truthy value!") :  console.log("This is falsy value!");

   
/*Q15. Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F*/
let marks=window.prompt("Enter your marks:");
let validmarks=parseFloat(marks);
finalmarks=Math.round(marks);
if(validmarks.toString().length==marks.length && finalmarks>=80 && finalmarks<=100)
{
    alert('Your grade is A!!');
}
else if(validmarks.toString().length==marks.length && finalmarks>=70 && finalmarks<=79)
{
    alert('Your grade is B!!');
}
else if(validmarks.toString().length==marks.length && finalmarks>=60 && finalmarks<=69)
{
    alert('Your grade is C!!');
}
else if(validmarks.toString().length==marks.length && finalmarks>=50 && finalmarks<=59)
{
    alert('Your grade is D!!');
}
else if(validmarks.toString().length==marks.length && finalmarks>=0 && finalmarks<=49)
{
    alert('Your grade is F!!');
}
else
{
    alert('Not valid marks!!');
}


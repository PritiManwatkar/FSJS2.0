/*Q11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.*/

const currentdate=new Date();
console.clear();
console.log(`Current year is:${currentdate.getFullYear()}`);
console.log(`Current month is:${(currentdate.getMonth()+1).toString().padStart(2,'0')}`);
console.log(`Current date is:${currentdate.getDate().toString().padStart(2,'0')}`);
console.log(`Current day is:${currentdate.getDay()}`);
console.log(`Current hours are:${currentdate.getHours().toString().padStart(2,'0')}`);
console.log(`Current minutes are:${currentdate.getMinutes().toString().padStart(2,'0')}`);
console.log(`Numbers of seconds elapsed from January 1, 1970 to now are:${Date.now()/1000}`);
console.log(`Numbers of seconds elapsed from January 1, 1970 to now are:${(currentdate.getTime()+(currentdate.getTimezoneOffset()*60*1000))/1000}`);




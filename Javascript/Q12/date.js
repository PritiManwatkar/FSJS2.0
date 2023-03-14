/*QCreate a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm*/

const currentdate=new Date();
const datef=new Intl.DateTimeFormat('en-AU',{
    dateStyle:"short",
    timeStyle:"short",
});
console.clear();
console.log(`Current date & time in format YYYY-MM-DD HH:mm is ${currentdate.toISOString().substring(0,currentdate.toISOString().lastIndexOf(':')).replace('T',' ')}`);
console.log(`Current date & time in format DD-MM-YYYY HH:mm is ${currentdate.getDate().toString().padStart(2,'0')}-${(currentdate.getMonth()+1).toString().padStart(2,'0')}-${currentdate.getFullYear()} ${currentdate.getHours().toString().padStart(2,'0')}:${currentdate.getMinutes().toString().padStart(2,'0')}`);
console.log(`Current date & time in format DD-MM-YYYY HH:mm is ${datef.format(currentdate).replace(',','').substring(0,datef.format(currentdate).replace(',','').lastIndexOf(' '))}`);






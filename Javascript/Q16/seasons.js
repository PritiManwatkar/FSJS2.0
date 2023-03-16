/*Q16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer*/
let month=window.prompt("Enter month name:");

switch(month.toLowerCase())
{
    case "september":
    case "october":
    case "november":
        alert("This is Autumn season!");
        break;
    case "december":
    case "january":
    case "february":
        alert("This is Winter season!");
        break;
    case "march":
    case "april":
    case "may":
        alert("This is Spring season!");
        break;
    case "june":
    case "july":
    case "august":
        alert("This is Summer season!");
        break;
    default:
        alert("Invalid month name!!");
}

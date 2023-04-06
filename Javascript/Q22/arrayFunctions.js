/*Q22. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let mid;
let medianage;
let avgage;
const val1 = 0;
console.clear();
console.log(`Original array is: ${ages}`);
ages.sort();
console.log(`Sorted array is: ${ages}`);
console.log(`Min age is: ${ages[0]}`);
console.log(`Max age is: ${ages[ages.length-1]}`);
if(ages.length % 2 == 0)
{
   mid=ages.length/2;
   medianage=(ages[mid]+ages[mid-1])/2;
}
else
{
    mid=Math.floor(ages.length/2);
    medianage=ages[mid];
}
console.log(`Median age is: ${medianage}`);
//use of reduce to recursively keep adding every element of array to previous sum
const sumWithval1 = ages.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  val1
);
avgage=sumWithval1/ages.length;
console.log(`Average age is: ${avgage}`);
console.log(`The range of ages is: ${ages[ages.length-1]-ages[0]}`);
if(Math.abs(ages[0]-avgage)>Math.abs(ages[ages.length-1]-avgage))
{
    console.log(`The (min age - average age)(${Math.abs(ages[0]-avgage)}) is greater than (max age - average age)${Math.abs(ages[ages.length-1]-avgage)}`);
}
else if(Math.abs(ages[0]-avgage)<Math.abs(ages[ages.length-1]-avgage))
{
    console.log(`The (min age - average age)(${Math.abs(ages[0]-avgage)}) is less than (max age - average age)${Math.abs(ages[ages.length-1]-avgage)}`);
}
else
{
    console.log(`The (min age - average age)(${Math.abs(ages[0]-avgage)}), (max age - average age)${Math.abs(ages[ages.length-1]-avgage)} are equal.`);
}

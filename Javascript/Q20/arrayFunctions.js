/*Q20. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'*/
function additem(arr1,val1,pos)
{
    if(arr1.includes(val1))
    {
        console.log(`${val1} is already in shopping cart!`);
    }
    else
    {
        if(pos=='E')
        {
            console.log(`Adding ${val1} at the end of shopping cart!`);
            arr1.push(val1);
        }
        else
        {
            console.log(`Adding ${val1} in the begining of shopping cart!`);
            arr1.unshift(val1);
        }
    }
}
function removeitem(arr1,val1)
{
    if(arr1.includes(val1))
    {
        arr1.splice(arr1.indexOf(val1), 1);
        console.log(`${val1} is removed from shopping cart!`);
    }
    else
    {
        console.log(`${val1} is not in shopping cart!`);
           
    }
}
function modifyitem(arr1,val1,val2)
{
    if(arr1.includes(val1))
    {
        arr1.splice(arr1.indexOf(val1), 1,val2);
        console.log(`${val1} is removed from shopping cart and ${val2} is inserted in it's place!`);
    }
    else
    {
        console.log(`${val1} is not in shopping cart!`);
           
    }
}
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.clear();
console.log(`Shopping cart is: ${shoppingCart}`);
additem(shoppingCart,'Meat','B');
console.log(`Shopping cart is: ${shoppingCart}`);
additem(shoppingCart,'Sugar','E');
console.log(`Shopping cart is: ${shoppingCart}`);
additem(shoppingCart,'Meat','B');
additem(shoppingCart,'Sugar','E');
console.log(`Shopping cart is: ${shoppingCart}`);
removeitem(shoppingCart,'Honey');
console.log(`Shopping cart is: ${shoppingCart}`);
removeitem(shoppingCart,'Honey');
modifyitem(shoppingCart,'Tea','Green Tea')
console.log(`Shopping cart is: ${shoppingCart}`);
modifyitem(shoppingCart,'Tea','Green Tea')
console.log(`Shopping cart is: ${shoppingCart}`);

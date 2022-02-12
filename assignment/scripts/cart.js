console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// - Create a global variable named `basket` and set it to an empty array.
let basket = []; //makes a basket
const maxItems = 5;

//
// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`.
//   - return `true` indicating the item was added
function isFull() {
  console.log('in isFull')
  if (basket.length < maxItems) {
    return false;
  } else if (basket.length >= maxItems) {
    return true;
  } // end conditional
} // end isFull

function addItem ( item ) {
  console.log('in addItem') //will log if function is running
  basket.push( item );

  return true;
}// end addItem

addItem('banana'); //adds banana
addItem('avocado'); //adds avocado
console.log(addItem('bacon')); //adds bacon and returns true
console.log(basket); //should include 'banana' and 'avocado' and 'bacon' in that order. Success!
//
// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line

// function listItems (array) {
//   console.log('in listItems');
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//   }
//   return true;
// } //This code works, but I want to try something I saw on the old google machine:

// function listItems (array) {
//   console.log('in listItem');
//   array.forEach((item) => {
//     console.log(item)
//   });
//   return true;
// } //end listItems.
//This also works! Love that - the forEach method seems intuitive to me.

function listItems (array) {
  for (i = 0, i < array.length; i++) {
    let itemInBasket = array[i];
  }
  return itemInBasket;
}

console.log(listItems(basket));
console.log(basket); //checking the basket...

// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
function empty () {
  basket = [];
  return basket;
}//end empty
console.log('The basket has: ', basket);
console.log(addItem('chicken'));
console.log('Checking new basket: ', basket);
console.log(empty()); //this logs true to the console, so we can know that the function ran successfully.
console.log(basket); //array should now be empty!


console.log('Ooo BIG Stretch');
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.
//
// __Using functions in other functions!__
//
// 1. Add a global `const` named `maxItems` and set it to 5.

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)

// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`

// __Using Array built-in functions!__
//
// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found

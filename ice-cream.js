//Determine which flavours of ice cream exist and orgnize them.

// Do not modify these first two lines
const iceCreamFlavours = [
  "chocolate",
  "vanilla",
  "cookies and cream",
  "rocky road",
  "strawberry",
];
console.log(iceCreamFlavours);

// Your code below here...

//Add root beer without modifing the origianl array.
const addIceCreamFlavours = ["root beer"];
const totalIceCreamFlavours = iceCreamFlavours.concat(addIceCreamFlavours);
console.log(totalIceCreamFlavours);

//log first flavour of available ice cream flavours
console.log(totalIceCreamFlavours[0]);

//log last flavour of available ice cream flavours
console.log(totalIceCreamFlavours[totalIceCreamFlavours.length - 1]);

//log the total number of flavours available
console.log(totalIceCreamFlavours.length);

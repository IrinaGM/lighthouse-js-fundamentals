//Each container on the space ship can hold exactly 100 bottles of maple syrup.
//A container will only be sent if it's full.
//When this function is given a number, it should return how many hundreds fit into that number.

const howManyHundreds = function (num) {
  return (num - (num % 100)) / 100;
};

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

// /*
// In this exercise, we will define 3 functions to calculate the areas of 3 different shapes:

// rectangle: length × width
// triangle: base × height / 2
// circle: π × radius × radius

// If any of the parameters are negative, the function should return undefined.

// */

// const calculateRectangleArea = function (length, width) {
//   if (length >= 0 && width >= 0) {
//     return length * width;
//   }
//   return undefined;
// };
// const calculateTriangleArea = function (base, height) {
//   if (base >= 0 && height >= 0) {
//     return (base * height) / 2;
//   }
//   return undefined;
// };
// const calculateCircleArea = function (radius) {
//   if (radius >= 0) {
//     return Math.PI * radius * radius;
//   }
//   return undefined;
// };

// console.log(calculateRectangleArea(10, 5)); // should print 50
// console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
// console.log(calculateRectangleArea(10, -5)); // should print undefined

// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined

// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); // should print undefined

var team = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter",
];

const hasEnoughPlayers = function (arr) {
  if (arr.length >= 7) {
    return true;
  } else {
    return false;
  }
};

console.log(hasEnoughPlayers(team));

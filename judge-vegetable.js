/*
- implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. 
- Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).
- Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.
*/

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const judgeVegetable = function (vegetables, metric) {
  //will contain the values of the best veg. initialized with the first object to compare with the rest.
  let bestVeg = vegetables[0];
  //go over the string and compare each metric to decide which veg is the best.
  for (let i = 1; i < vegetables.length; i++) {
    if (bestVeg[metric] < vegetables[i][metric]) {
      bestVeg = vegetables[i];
    }
  }
  return bestVeg.submitter;
};

const metric = "plumpness";

console.log(judgeVegetable(vegetables, metric));

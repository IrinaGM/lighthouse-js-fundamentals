/* 
- Params are int.
- Function to return an array of numbers from start to end counting by step.
- Return empty array if given incorrect params.
  -- start, end, or step being undefined
  -- start being greater than end
  -- step being 0, or negative
*/

function range(start, end, step) {
  const numsArr = [];
  if (start < end && step > 0) {
    let i = start;
    while (i <= end) {
      numsArr.push(i);
      i += step;
    }
  }

  return numsArr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

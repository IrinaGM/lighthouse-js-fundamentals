/* 
For this challenge you'll have to implement a function called finalPosition(moves), 
which will calculate the position of the parade based on an array of directional moves. 
The parade will move on an X-Y grid
Your function will receive an array of moves, 
which are strings that say either north, south, west, or east, 
these represent the parade moving in a particular direction by a single space on the grid.
By looking at the path that the parade moves in, your function should
calculate and then return an array representing the position of the parade after completing all of the moves. 
The first element of the array should be the X position, and the second element of the 
array should be the Y position. The parade begins at [0,0].

If we called the function with the following arguments.
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

north => [0,1] - Y+1
north => [0,2] - Y+1
west => [-1,2] - X-1
north => [-1,3] - Y+1
east => [0,3] - X+1
north => [0,4] - Y+1

finalPosition(moves);
The finalPosition function should return the array:
[-1, 4]
*/

moves = ["east", "east", "east", "east", "west", "west", "south"];

let finalPosition = function (moves) {
  let finalPoint = [0, 0];
  for (let move of moves) {
    switch (move) {
      case "north":
        finalPoint[1] += 1;
        break;
      case "south":
        finalPoint[1] -= 1;
        break;
      case "east":
        finalPoint[0] += 1;
        break;
      case "west":
        finalPoint[0] -= 1;
        break;
      default:
        console.log(`Sorry, no direction available`);
        break;
    }
  }

  return finalPoint;
};

console.log(finalPosition(moves));

//voting station calculation challenge

/* chooseStations(stations) function that takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.
Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.
In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre. */

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

let chooseStations = function (arr) {
  let votingStations = [];
  const capacity = 20;
  const venueType = ["school", "community centre"];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] >= capacity) {
      if (arr[i][2] === venueType[0] || arr[i][2] === venueType[1]) {
        votingStations.push(arr[i][0]);
      }
    }
  }
  return votingStations;
};

console.log(chooseStations(stations));

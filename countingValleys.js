// Problem Name: Counting Valleys
// int steps: the number of steps on the hike
// string path: a string describing the path

function countingValleys(steps, path) {
  // Write your code here
  let previousPosition = 0;
  let currentPosition = 0;
  let valleysTraversed = 0;

  let stepsArr = path.split("");

  stepsArr.forEach((step) => {
    if (step === "D") {
      currentPosition -= 1;
    } else {
      currentPosition += 1;
    }

    if (previousPosition < 0 && currentPosition == 0) {
      valleysTraversed += 1;
    }

    previousPosition = currentPosition;
  });

  console.log("Valleys Traversed: ", valleysTraversed);

  return valleysTraversed;
}

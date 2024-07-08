/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
  // Write your code here
  let currentIndex = 0;
  const lastIndex = c.length - 1;

  let jumps = 0;

  while (currentIndex < lastIndex) {
    if (c[currentIndex + 2] != 1) {
      currentIndex += 2;
    } else {
      currentIndex += 1;
    }

    jumps += 1;
  }

  console.log("Jumps Required: ", jumps);

  return jumps;
}

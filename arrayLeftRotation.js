/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {
  // Write your code here
  let arr = [...a];

  for (let i = 0; i < d; i++) {
    let removedElement = arr.shift();
    arr.push(removedElement);
  }

  console.log("Rotated Array: ", arr);

  return arr;
}

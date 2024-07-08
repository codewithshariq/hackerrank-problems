/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
  // Write your code here
  const numberOfRepetitions = Math.floor(n / s.length);
  const remainder = n % s.length;

  const countOfA = s.split("").filter((e) => e === "a").length;

  const totalAs = BigInt(
    countOfA * numberOfRepetitions +
      s
        .slice(0, remainder)
        .split("")
        .filter((e) => e === "a").length
  );

  console.log("Total As: ", totalAs);

  return totalAs;
}

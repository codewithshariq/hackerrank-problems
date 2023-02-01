function diagonalDifference(arr) {
  let reverseCount = arr.length - 1;
  let LTR = 0,
    RTL = 0;

  for (let i = 0; i < arr.length; i++) {
    LTR = LTR + arr[i][i];
    RTL = RTL + arr[i][reverseCount];
    reverseCount -= 1;
  }

  return Math.abs(LTR - RTL);
}

module.exports = diagonalDifference;

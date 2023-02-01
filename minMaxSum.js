function minMaxSum(arr) {
  let sortedArr = arr.sort();
  let sum = arr.reduce((sum, current) => sum + current, 0);
  let maxSum = BigInt(sum - arr[0]);
  let minSum = BigInt(sum - arr[arr.length - 1]);

  console.log(`${minSum} ${maxSum}`);
}

module.exports = minMaxSum;

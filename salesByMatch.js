// Problem Name: Sales By Match
// int n: the number of socks in the pile
// int ar[n]: the colors of each sock

function sockMerchant(n, ar) {
  // Write your code here
  let uniqueColors = [...new Set(ar)];

  let totalPairs = 0;

  uniqueColors.forEach((color) => {
    let count = ar.filter((e) => e === color).length;
    let pairs = Math.floor(count / 2);
    totalPairs += pairs;
  });

  console.log("Total Pairs: ", totalPairs);

  return totalPairs;
}

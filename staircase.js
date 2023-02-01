function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (j >= n - i) {
        arr.push("#");
      } else {
        arr.push(" ");
      }
    }
    console.log(arr.join(""));
  }
}

module.exports = staircase;

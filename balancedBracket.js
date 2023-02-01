function isBalanced(s) {
  let startingBrackets = ["(", "{", "["];
  let endingBrackets = [")", "}", "]"];
  let isBalancedStr;

  function isLengthEven(str) {
    return str.length % 2 === 0;
  }

  function properEnclosingBrackets(str) {
    return (
      startingBrackets.includes(str[0]) &&
      endingBrackets.includes(str[str.length - 1])
    );
  }

  function getMatchingBracket(str) {
    const index = endingBrackets.findIndex((e) => e === str);
    return startingBrackets[index];
  }

  function checkMatchingBrackets(arr) {
    let queue = [];
    for (let i = 0; i < arr.length; i++) {
      if (startingBrackets.includes(arr[i])) {
        queue.push(arr[i]);
      } else if (
        queue.length > 0 &&
        queue[queue.length - 1] === getMatchingBracket(arr[i])
      ) {
        queue.pop();
      } else {
        return "NO";
      }
    }

    if (queue.length === 0) {
      return "YES";
    } else {
      return "NO";
    }
  }

  if (isLengthEven(s) && properEnclosingBrackets(s)) {
    let arr = s.split("");
    isBalancedStr = checkMatchingBrackets(arr);
  } else {
    isBalancedStr = "NO";
  }

  return isBalancedStr;
}

module.exports = isBalanced;

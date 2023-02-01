function queueUsingTwoStacks(input) {
  const queue = [];
  const arr = input.split(/[\r\n]/g);
  //Because first line represents the no of queries
  const noOfQueries = Number(arr[0]);
  arr.shift();

  for (let i = 0; i < noOfQueries; i++) {
    const [option, value] = arr[i].split(" ");
    switch (option) {
      case "1": {
        queue.push(value);
        break;
      }
      case "2": {
        queue.shift();
        break;
      }
      case "3": {
        console.log(queue[0]);
        break;
      }
    }
  }
}

module.exports = queueUsingTwoStacks;

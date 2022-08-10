export default function simpleTextEditor(input) {
  //Enter your code here
  let str = "";
  let prevStrs = [];
  let inputArr = input.split(/[\r\n]/g);
  //Q represents no of operations
  let Q = inputArr.shift();
  for (let i = 0; i < Q; i++) {
    const [option, value] = inputArr[i].split(" ");
    switch (option) {
      case "1": {
        prevStrs.push(str);
        str = str.concat(value);
        break;
      }
      case "2": {
        prevStrs.push(str);
        let temp = str.split("");
        for (let i = 0; i < value; i++) {
          temp.pop();
        }
        str = temp.join("");
        break;
      }
      case "3": {
        console.log(str[value - 1]);
        break;
      }
      case "4": {
        str = prevStrs[prevStrs.length - 1];
        prevStrs.pop();
        break;
      }
    }
  }
}

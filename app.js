/** @format */
function Add(number_1, number_2) {
  return number_1 + number_2;
}
const FinalValues = Add(2, 2);

console.log(FinalValues);

const Calculator = (operations, num_1, num_2) => {
  switch (operations) {
    case "Add":
      return num_1 + num_2;
    case "sub":
      return num_1 - num_2;
    case "multiply":
      return num_1 * num_2;
    case "divide":
      if (num_2 === 0) {
        return "Error: Cannot divide by zero";
      }
      return num_1 / num_2;

    default:
      return "Invalid operation";
  }
};
console.log(Calculator("Add", "3", 10)); //output:20
console.log(Calculator("sub", 10, 5));
console.log(Calculator("multiply", 10, 10));
console.log(Calculator("divide", 10, 0)); //output:Error: Cannot divide by zero
console.log(Calculator("%", 10, 5)); //output:Error: invalid operation

const PrintMessage = (message) => {
  console.log(message);
};

PrintMessage("Hey");

function getTotal(numbers) {
  return numbers.reduce((acc, item) => {
    return acc + item; // its acc takes 0 value from first step and takes second value item like 0+3=3,3+2=5,5+1=6 // output is:6
  }, 0);
}
console.log(getTotal([3, 2, 1]));

function printStars(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      console.log("* ");
    }
    console.log(" ");
  }
}
printStars(5);

function ArraySum() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
}
console.log(ArraySum(1, 2, 3, 4, 5));

//Write a code to print reverse output

function reverseArray(array) {
  var reversedArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
// var array = [1, 2, 3, 4, 5];
var reversedArray = reverseArray([1, 2, 3, 4, 5]);
console.log(reversedArray);

/** @format */

const Calculator = (
  operation: "Add" | "sub" | "multiply" | "divide",
  num_1: number,
  num_2: number
) => {
  switch (operation) {
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
console.log(Calculator("Add", 2, 10)); //output:20
console.log(Calculator("sub", 10, 5));
console.log(Calculator("multiply", 10, 10));
console.log(Calculator("divide", 10, 0)); //output:Error: Cannot divide by zero
console.log(Calculator("Add", 10, 5)); //output:Error: invalid operation

const PrintMessage = (message: string) => {
  return message;
};

console.log(PrintMessage("Hey"));

function getTotal(numbers: Array<number>) {
  return numbers.reduce((acc, item) => {
    return acc + item; // its acc takes 0 value from first step and takes second value item like 0+3=3,3+2=5,5+1=6 // output is:6
  }, 0);
}
console.log(getTotal([3, 2, 1]));

function printStars(n: number) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      console.log("$ ");
    }
    console.log(" ");
  }
}
printStars(5);

type userData = {
  name: string;
  age: number;
  city?: string;
  address?: string;
  role: string;
};

const user: userData = {
  name: "john",
  age: 20,
  role: "admin",
  address: "lahore",
};
console.log(user);

type PostData = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  tags?: string;
};

const post: PostData[] = [
  {
    id: 1,
    title: "TS",
    content: "JS Extensive",
    author: "John Doe",
    date: "26-05-2023",
  },
  {
    id: 2,
    title: "TS",
    content: "JS Extensive",
    author: "John Doe",
    date: "26-05-2023",
  },
];
console.log(post);

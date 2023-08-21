/** @format */

// In TypeScript, a type alias is a way to create a new name for a type. It allows you to define a custom name for a complex or frequently used type, making your code more readable and maintainable. Type aliases are especially useful when working with union types, intersection types, and complex object structures.

// To create a type alias, you use the type keyword followed by the new name you want to give to the type, an equal sign, and the type you're aliasing. Here's a simple example:

type User_Information = {
  First_name: string;
  Last_Name: string;
  Age: Number;
  Email: string | "";
  Address?: string;
};
const User_1: User_Information = {
  First_name: "John",
  Last_Name: "Doe",
  Age: 25,
  Email: "johnDoe@gmail.com",
  Address: "New York City",
};
console.table(User_1);

//Complex Object structure

type User = {
  id: number | string;
  username: string;
  email: string;
  profile: {
    fullName: string;
    avatarUrl: string;
  };
};

const Admin_User: User = {
  id: 1,
  username: "TechDevelopers",
  email: "techdevelopers@gmail.com",
  // Nested object
  profile: {
    fullName: "John Doe",
    avatarUrl: "https://example.com/avatar.jpg",
  },
};
console.table(Admin_User.profile);

//Code Explanation Distance Measure Between Two points
//p2.x=3
//p1.x=0  p2.x - p1.x  3-0 =3
//p2.y - p1.y   4-0= 4
//p2.x - p1.x **2 + p2.y - p1.y **2
//  (3) **2 + (4)**2
//9 +16
//25 .. This formula calculate and show distance between two points is 25 and using formula Math.sqrt (25) then outPut will be 5..
type Points = {
  x: number;
  y: number;
};

function DistanceMeasure(p1: Points, p2: Points) {
  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
}
const point1: Points = { x: 0, y: 0 };
const point2: Points = { x: 3, y: 4 };
console.log(DistanceMeasure(point1, point2)); //5

// type alias for an array of objects with specific properties.
type Person = {
  name: string;
  age: number;
};

type PeopleArray = Person[];
const people: PeopleArray = [
  { name: "James", age: 25 },
  { name: "Tom", age: 30 },
  { name: "Cruise", age: 22 },
];

// console.log(people[1]); //outPut  name: "Tom", age: 30

for (var Data of people) {
  console.log(`${Data.name} is ${Data.age} years old.`);
}

// Define a type for a function that takes two strings and returns their concatenation.
// solution_1
type TakeString = {
  a: string;
  b: string;
};

const StringsConcatenation = (A: TakeString, B: TakeString) => {
  return `your Message is ${A.a} ${A.b} ${B.a} ${B.b}`;
};

const inputA: TakeString = { a: "Hey", b: "Baby" };
const inputB: TakeString = { a: "Hello", b: "World" };

console.log(StringsConcatenation(inputA, inputB));

//solution_2
type Concat = (str_1: string, str_2: string) => string;
const StringConcat: Concat = (str_1, str_2) => str_1 + str_2;
const results = StringConcat("shoaib", "Rasheed");
console.log(results);

// Create a type for an object with dynamic keys and string values.
type DynamicStringObject = {
  [key: string]: string; //its takes key dynamically when i set one time key:String then i use and print just one time so that's why i take key in string with  array
};
const DynamicObject: DynamicStringObject = {
  Key_1: "Tom",
  Key_2: "Latham",
  Key_3: "John",
  Key_4: "Joseph",
  Key_5: "Doe",
  Key_6: "Cruise",
};
for (var Keys in DynamicObject) {
  if (DynamicObject.hasOwnProperty(Keys)) {
    console.table(`${Keys} : ${DynamicObject[Keys]} `);
  }
}
// Define a type alias for a callback function that takes an error or a result.
type Callback<T> = (error: Error | null, result: T) => void;

// Example usage
function fetchData(callback: Callback<string>): void {
  // Simulating data fetching
  const isError = false;
  if (isError) {
    callback(new Error("An error occurred"), "");
  } else {
    callback(null, "Data fetched successfully");
  }
}

// Using the fetchData function
fetchData((error, result) => {
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Result:", result);
  }
});

//Custom types in typescript
//  you can create custom types using the type keyword. Custom types allow you to define your own type aliases, which can make your code more readable and expressive

type CustomType = {
  property1: string;
  readonly property2: number;
};

const myCustomObject: CustomType = {
  property1: "Hey this is me",
  property2: 42,
};
console.log(myCustomObject);

type Status = "active" | "inactive";

type Result = {
  success: boolean;
  message: string;
};

type CombinedType = CustomType & Result;

const item: CombinedType = {
  property1: "Hello",
  property2: 42,
  success: true,
  message: "Operation successful",
};
console.log(item);

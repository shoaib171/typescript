/** @format */

//what is generics in ts?
//Generics in TypeScript provide a way to create flexible and reusable functions, classes, or interfaces that can work with different types while maintaining type safety. They allow you to write code that can operate on a variety of data types without sacrificing type checking. This feature is particularly useful when writing libraries or components that need to be adaptable to different data structures and use cases.

// Example

// function RollNumbers(arg: number) {
//   console.log(arg);
//   return arg;
// }
// RollNumbers(2);

// function RollStrings(arg: string) {
//   console.log(arg);
//   return arg;
// }
// RollStrings("hello");

// function RollArrays(arg: any[]) {
//   console.log(arg);
//   return arg;
// }
// RollArrays([1, 2, 45]);

//simple Example to create Generic Functions
function LogAnythingElse<T>(arg: T): T {
  console.log(arg);
  return arg;
}
LogAnythingElse("hey baby");
LogAnythingElse(2000);
LogAnythingElse<number>(20);

//Generic classes
class BoxData<K> {
  private value: K;
  constructor(value: K) {
    this.value = value;
  }
  getValues() {
    return this.value;
  }
}

let stringData = new BoxData("Hello Typescript Generics");
let NumbersData = new BoxData(200);
console.log(stringData.getValues());
console.log(NumbersData.getValues());

//Generics interface

interface OldAge {
  age: number;
}

function OldestAge<T extends OldAge>(peoples: T[]): T {
  return peoples.sort((x, y) => y.age - x.age)[0]; //we get oldestAge of any person from array of an object then first sort array and then compare in descending
}
const Person = OldestAge([{ age: 20 }, { age: 30 }, { age: 40 }, { age: 50 }]);
console.log(Person);

interface players {
  name: string;
  age: number;
}
const playerData: players[] = [
  { name: "john", age: 10 },
  { name: "jerry", age: 100 },
  { name: "jan", age: 200 },
];
const Persons = OldestAge(playerData);
console.log(Persons);

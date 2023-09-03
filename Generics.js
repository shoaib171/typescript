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
function LogAnythingElse(arg) {
    console.log(arg);
    return arg;
}
LogAnythingElse("hey baby");
LogAnythingElse(2000);
LogAnythingElse(20);
//Generic classes
var BoxData = /** @class */ (function () {
    function BoxData(value) {
        this.value = value;
    }
    BoxData.prototype.getValues = function () {
        return this.value;
    };
    return BoxData;
}());
var stringData = new BoxData("Hello Typescript Generics");
var NumbersData = new BoxData(200);
console.log(stringData.getValues());
console.log(NumbersData.getValues());
function OldestAge(peoples) {
    return peoples.sort(function (x, y) { return y.age - x.age; })[0]; //we get oldestAge of any person from array of an object then first sort array and then compare in descending
}
var Person = OldestAge([{ age: 20 }, { age: 30 }, { age: 40 }, { age: 50 }]);
console.log(Person);
var playerData = [
    { name: "john", age: 10 },
    { name: "jerry", age: 100 },
    { name: "jan", age: 200 },
];
var Persons = OldestAge(playerData);
console.log(Persons);

/** @format */
var PersonData_1 = {
    First_Name: "Tom",
    Last_Name: "cruise",
    age: 20,
    address: "RTA",
};
console.log(PersonData_1);
PersonData_1.age = 40;
console.log(PersonData_1);
var readOnlyPerson = {
    id: 1,
    name: "Alice",
};
console.log(readOnlyPerson); //Output :{id:1, name: "Alice"}
var subtract = function (x, y) { return x - y; };
console.log(subtract(2, 10));

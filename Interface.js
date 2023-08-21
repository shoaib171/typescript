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
var Employees_Data = {
    First_Name: "Joseph",
    Last_Name: "crew",
    age: 20,
    address: "RTA",
    employeeId: 12,
    department: "IT",
};
console.log(Employees_Data);
var Dog = /** @class */ (function () {
    function Dog() {
        this.makeVoice = function () {
            console.log("Woof");
        };
        this.soundCloud = function (x, y) {
            var Operand = x + y;
            return Operand;
        };
    }
    return Dog;
}());
var Results = new Dog();
Results.makeVoice(); // Outputs: Woof
console.log(Results.soundCloud(2, 3)); // Outputs:5

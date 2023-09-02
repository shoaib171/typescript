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
        this.returnValueFunction = function (a, b) {
            var Total = a + b;
            return Total;
        };
    }
    return Dog;
}());
var Results = new Dog();
Results.makeVoice(); // Outputs: Woof
console.log(Results.soundCloud(2, 3)); // Outputs:5
console.log(Results.returnValueFunction(5, 5));
var Transactions_1 = {
    PayeeAccountNumber: 9876,
    PayerAccountNumber: 4555,
};
var Transactions_2 = {
    PayeeAccountNumber: 9876,
    PayerAccountNumber: 45677,
};
var AccountHolder_Information = {
    AccountHolder: "Abdul_Rasheed",
    AccountTitle: "Ghani Marble Factory",
    isActive: true,
    OpeningAmount: 250000,
    Balance: 30000000,
    transaction: [Transactions_1, Transactions_2],
};
console.log(AccountHolder_Information);
//unions
var variable;
variable = "Hello"; // Valid
variable = 42; // Valid
// variable = true;    // Error, boolean is not part of the union
// Function parameter with a union type
function display(value) {
    return value;
}
console.log(display("Hello"));
console.log(display(45));
console.log(display(true));
function messagePrint(message) {
    return message;
}
console.log(messagePrint("hey"));
function PrintID(id) {
    // console.log(id.toUpperCase()); Face error when uncomment
    //its face error because we change or set upperCase to string value so that's why how i can judge id is number or string then in Ts use Narrowing concept mean set condition on type defined e.g:
    if (typeof id === "string") {
        console.log(id.toUpperCase);
    }
    else {
        console.log(id);
    }
}
PrintID("hello");
PrintID(1);

/** @format */

// interfaces are a powerful feature that allows you to define the shape of an object, specifying what properties and methods it should have. They provide a way to enforce a certain structure on objects and ensure that they adhere to a specific contract.

// Defining Interfaces:
// 1-You define an interface using the interface keyword followed by the interface name and its properties/methods:

interface Persons {
  First_Name: string;
  Last_Name?: string; //question mark ? sign shows last_Name is an optional where i want to set optional then ? sign declare with key
  age: number;
  address?: string;
}
const PersonData_1: Persons = {
  First_Name: "Tom",
  Last_Name: "cruise",
  age: 20,
  address: "RTA",
};

console.log(PersonData_1);
PersonData_1.age = 40;
console.log(PersonData_1);

//Readonly Properties:
// You can mark properties as readonly to indicate that they can't be modified after initialization:
interface ReadOnlyPerson {
  readonly id: number;
  name: string;
}

const readOnlyPerson: ReadOnlyPerson = {
  id: 1,
  name: "Alice",
};

console.log(readOnlyPerson); //Output :{id:1, name: "Alice"}
// This will result in a TypeScript error
// readOnlyPerson.id = 2;

// Function Signatures:
// Interfaces can also describe function types, which define the shape of functions:
interface MathFunctions {
  (x: number, y: number): number;
}

const subtract: MathFunctions = (x, y) => x - y;
console.log(subtract(2, 10));

// Extending Interfaces:
// Interfaces can extend other interfaces, allowing you to create more specialized interfaces:
interface Employee extends Persons {
  employeeId: number;
  department: string;
}
const Employees_Data: Employee = {
  First_Name: "Joseph",
  Last_Name: "crew",
  age: 20,
  address: "RTA",
  employeeId: 12,
  department: "IT",
};
console.log(Employees_Data);

// Implementing Interfaces:
// In addition to defining interfaces for objects, you can also implement interfaces in classes to ensure that the class adheres to the contract specified by the interface:
interface Animals {
  makeVoice(): void;
  returnValueFunction(a: number, b: number): number;
}

class Dog implements Animals {
  makeVoice = () => {
    console.log("Woof");
  };

  soundCloud = (x: number, y: number) => {
    const Operand = x + y;
    return Operand;
  };
  returnValueFunction = (a: number, b: number) => {
    let Total = a + b;
    return Total;
  };
}
const Results = new Dog();
Results.makeVoice(); // Outputs: Woof
console.log(Results.soundCloud(2, 3)); // Outputs:5
console.log(Results.returnValueFunction(5, 5));

//Example Bank Transaction system using  interface

interface Transactions {
  PayeeAccountNumber: number;
  PayerAccountNumber: number;
}
interface BankAccount {
  AccountHolder: string;
  AccountTitle: string;
  isActive: Boolean;
  OpeningAmount: number;
  Balance: number;
  transaction: Transactions[];
}
const Transactions_1: Transactions = {
  PayeeAccountNumber: 9876,
  PayerAccountNumber: 4555,
};
const Transactions_2: Transactions = {
  PayeeAccountNumber: 9876,
  PayerAccountNumber: 45677,
};

const AccountHolder_Information: BankAccount = {
  AccountHolder: "Abdul_Rasheed",
  AccountTitle: "Ghani Marble Factory",
  isActive: true,
  OpeningAmount: 250000,
  Balance: 30000000,
  transaction: [Transactions_1, Transactions_2],
};
console.log(AccountHolder_Information);

//unions
let variable: string | number;

variable = "Hello"; // Valid
variable = 42; // Valid
// variable = true;    // Error, boolean is not part of the union

// Function parameter with a union type
function display(value: string | number | boolean) {
  return value;
}
console.log(display("Hello"));
console.log(display(45));
console.log(display(true));

function messagePrint(message: string) {
  return message;
}

console.log(messagePrint("hey"));

// unions with narrowing concept

type Id = number | string;
function PrintID(id: Id) {
  // console.log(id.toUpperCase()); Face error when uncomment
  //its face error because we change or set upperCase to string value so that's why how i can judge id is number or string then in Ts use Narrowing concept mean set condition on type defined e.g:

  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
PrintID("hello");
PrintID(1);

/** @format */

// what is duck/structural typing ?
// In the context of TypeScript, which is a statically typed superset of JavaScript, duck typing manifests itself through structural typing. Structural typing means that the type compatibility is based on the structure or shape of the object (its properties and methods) rather than its explicitly declared type.

interface credential {
  username: string;
  password: string;
  isAdmin?: boolean;
}
function HelloDuckType(cr: credential) {
  console.log(cr);
  return cr;
}
const userData: credential = {
  username: "slug",
  password: "sel",
  isAdmin: true,
};

HelloDuckType(userData);

interface Personal {
  name: string;
  age: number;
}

interface Point {
  x: number;
  y: number;
}

function printPerson(person: Personal) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const john = { name: "John", age: 30 };
const alice = { name: "Alice", age: 25 };
// const origin = { x: 0, y: 0 };

printPerson(john); // Works because the structure of 'john' matches 'Person'.
printPerson(alice); // Also works for 'alice'.
// printPerson(origin); // Error: 'origin' does not have 'name' and 'age'.

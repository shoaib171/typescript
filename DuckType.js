/** @format */
function HelloDuckType(cr) {
    console.log(cr);
    return cr;
}
var userData = {
    username: "slug",
    password: "sel",
    isAdmin: true,
};
HelloDuckType(userData);
function printPerson(person) {
    console.log("Name: ".concat(person.name, ", Age: ").concat(person.age));
}
var john = { name: "John", age: 30 };
var alice = { name: "Alice", age: 25 };
// const origin = { x: 0, y: 0 };
printPerson(john); // Works because the structure of 'john' matches 'Person'.
printPerson(alice); // Also works for 'alice'.
// printPerson(origin); // Error: 'origin' does not have 'name' and 'age'.

/** @format */
var User_1 = {
    First_name: "John",
    Last_Name: "Doe",
    Age: 25,
    Email: "johnDoe@gmail.com",
    Address: "New York City",
};
console.table(User_1);
var Admin_User = {
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
function DistanceMeasure(p1, p2) {
    return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
}
var point1 = { x: 0, y: 0 };
var point2 = { x: 3, y: 4 };
console.log(DistanceMeasure(point1, point2)); //5
var people = [
    { name: "James", age: 25 },
    { name: "Tom", age: 30 },
    { name: "Cruise", age: 22 },
];
// console.log(people[1]); //outPut  name: "Tom", age: 30
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var Data = people_1[_i];
    console.log("".concat(Data.name, " is ").concat(Data.age, " years old."));
}
var StringsConcatenation = function (A, B) {
    return "your Message is ".concat(A.a, " ").concat(A.b, " ").concat(B.a, " ").concat(B.b);
};
var inputA = { a: "Hey", b: "Baby" };
var inputB = { a: "Hello", b: "World" };
console.log(StringsConcatenation(inputA, inputB));
var StringConcat = function (str_1, str_2) { return str_1 + str_2; };
var results = StringConcat("shoaib", "Rasheed");
console.log(results);
var DynamicObject = {
    Key_1: "Tom",
    Key_2: "Latham",
    Key_3: "John",
    Key_4: "Joseph",
    Key_5: "Doe",
    Key_6: "Cruise",
};
for (var Keys in DynamicObject) {
    if (DynamicObject.hasOwnProperty(Keys)) {
        console.table("".concat(Keys, " : ").concat(DynamicObject[Keys], " "));
    }
}
// Example usage
function fetchData(callback) {
    // Simulating data fetching
    var isError = false;
    if (isError) {
        callback(new Error("An error occurred"), "");
    }
    else {
        callback(null, "Data fetched successfully");
    }
}
// Using the fetchData function
fetchData(function (error, result) {
    if (error) {
        console.error("Error:", error.message);
    }
    else {
        console.log("Result:", result);
    }
});

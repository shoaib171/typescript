<!-- @format -->

What is interface in typescript and why i can used in replace of type?
In TypeScript, both interfaces and types are used to define custom data structures, but they serve slightly different purposes and have different capabilities. Here's a breakdown of what interfaces are and why you might choose them over types, and vice versa:
Interfaces:
1-Shape Definition: Interfaces are primarily used to define the shape of an object. They describe the properties and methods an object should have. They are great for describing contracts that objects must adhere to.
2-Class Implementations: Interfaces can be used to specify a contract that a class must adhere to. This allows you to ensure that a class implements certain properties and methods.
3-Extending Interfaces: Interfaces can extend other interfaces, which is useful for creating a hierarchy of contracts and building more specific interfaces based on more general ones.
4-Declaration Merging: Interfaces support declaration merging, which means you can extend an interface multiple times in different parts of your code, and the resulting interface will include all the merged declarations.

Types:
1-Union and Intersection Types: TypeScript's type keyword allows you to create more complex types using union (|) and intersection (&) types. For instance, you can define a type that's a union of different data structures.
2-Literal Types: Types can be used to create literal types, allowing you to define types that are specific literal values, like strings, numbers, or booleans.
3-Mapped Types: TypeScript's type can be used to define mapped types, which let you transform existing types into new types based on a mapping function.
4-Conditional Types: With conditional types, you can create types that depend on a condition. This is particularly useful when you want to create types based on the type of a variable.

```ts
In summary, interfaces and types serve slightly different purposes in TypeScript, and the choice between them depends on your specific use case. In many scenarios, you can use either interchangeably, but it's important to understand their differences and choose the one that aligns better with your design goals and code organization.
```

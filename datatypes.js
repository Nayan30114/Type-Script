//Number:Represents numeric values.
// let age: number = 25;
// console.log(age)
//String:Represents textual data.
// let a: string = "John";
// console.log(a)
//Boolean:Represents true or false values.
// let isStudent: boolean = true;
// console.log(isStudent)
//Array:Represents a collection of elements of the same type.
// let numbers: number[] = [1, 2, 3];
// console.log(numbers)
//Tuple:Represents a fixed-size, ordered collection of elements where each element can have a different type.
// // Declare a tuple with two elements of different types
// var person = ["John Doe", 30];
// // Access elements by index
// console.log(person[0]);
// console.log(person[1]);
// // Update elements
// person[0] = "ram";
// person[1] = 25;
// console.log(person[0]);
// console.log(person[1]);
//Enum:A way to give friendly names to a set of numeric values.
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// let color: Color = Color.Red;
// console.log(color);
// console.log(Color[color]); // Output: Red
//Any:Represents a dynamic type that can hold any value. Use it when the type of a variable is not known in advance.
// let users:any={
//     name:"Nayan",
//     age:89,
//     address:"Bhopal"
// }
// users.name=300
// console.log(users)
//Void:Represents the absence of a type. Typically used for functions that do not return a value.
// function logMessage(): void {
//     console.log("This function returns nothing.");
// }
// logMessage();
//Null and Undefined:Used to represent the absence of a value.
// let nullValue: null = null;
// let undefinedValue: undefined = undefined;
// console.log(nullValue)
//Object:key and value pair
var users = {
    name: "Nayan",
    age: 89,
    address: "Bhopal"
};
users.name = 300;
console.log(users);

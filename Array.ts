//array is te collection of datatype

// let data=['Jimmy','jeyo', 'Marry',90]
// data.push(10)
// console.log(data)




// let data:string[]=['Jimmy','jeyo', 'Marry']
// data.push("hi")
// console.log(data)


// Array containing elements of various data types
let mixedArray: (number | string | boolean | object)[] = [1, "two", true, { key: "value" }, false, 42];

// Accessing elements
console.log(mixedArray[0]); // Output: 1
console.log(mixedArray[1]); // Output: "two"
console.log(mixedArray[2]); // Output: true
console.log(mixedArray[3]); // Output: { key: "value" }
console.log(mixedArray[4]); // Output: false
console.log(mixedArray[5]); // Output: 42
//  Topic - Interface =>  It define the shape of an object. 

interface userType{
    name: string,
    age: number,
}

let users:userType = {
    name: "kjs",
    age: 20,
}
console.log(users)


interface userType{
    name: string,
    age: number,
}

let users1:userType = {
    name: "xxx",
    age: 25,
}
console.log(users1)

//-------------------------     With Function

// interface userType{
//     name: string,
//     age: number,
//     getName:()=>string
// }

// let users:userType = {
//     name: "kjs",
//     age: 20,
//     getName: function()
//     {
//         return "Nayan"
//     }
// }
// console.log(users.getName());
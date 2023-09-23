"use strict";
// var num1:number=5;
// var num2:number=10;
// var result:number=(num1+num2);
// console.log (result);
// var array1:number []=[1,2,3,4,5];
// var array2:string[]=["ali", "mani","zahid","ghani"];
//var array3=[{name:"adnan", age:40, job:"Rescue1122"},{name:"James", age:38, job:"Rescue1122"}];
// for (let i = 0; i < array.length; i++)
// {
//     const element = array i];
// }
// var array2:string[]=["ali", "mani","zahid","ghani"];
// array2.pop();
// console.log (array2)
// var array2:string[]=["ali", "mani","zahid","ghani"];
// var array3:string[]=array2.slice(1,2);
// console.log (array3);
let user = {
    fName: "Emmanueil",
    lName: "James",
    age: 38,
    hobbies: ["sleeping", "resting", "let chill", "again sleeping"],
    salary: () => 5000,
};
// console.log (user.salary())
// console.log (user.hobbies)
delete user.salary;
console.log(user);

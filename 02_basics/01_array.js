const arr = [0 , 7 , 8 , 9 , 10];
const names  = ["Keshav" , "Abhay"];
const arr1 = new Array(1,2,3,4);

// copy operation in array in javascript means it will make a sshallow copies means the change in the copy will also reflect in the main array 

// console.log(arr[1]);
// console.log(arr1[3]);


//Array Methods 

// arr.push(11);
// arr.push(5);
// arr.pop();
// arr.unshift(110);    // Add any element in the starting
// arr.shift();         // Remove element from the starting 

// console.log(arr.includes(10));
// console.log(arr.indexOf(10));

// let newarr = arr.join();     // it converts the array into string 

// console.log(arr);
// console.log(newarr);
// console.log(typeof arr);      // type of array is a object 
// console.log(typeof newarr);


// slice , splice
console.log("A " , arr);

let my1 = arr.slice(1,3);
console.log("my1 " , my1);
console.log("B " , arr);

let my2 = arr.splice(1,3);
console.log("my2 " , my2);
console.log("C " , arr);


// Note_1: in slice the last index is not included but in splice it is included 
// Note_2; in splice the original array is get changed but in slice the original array will be same 






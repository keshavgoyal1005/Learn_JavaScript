// Stack and Heap memory

// stack(premitive datatypes) and Heap(non-premitive datatypes)

// in stack memory we get the values by copying 
// in Heap memory we get the values by referance

let myname = "keshav";
let name_1 = myname;

name_1 = "Abhay";

console.log(myname);
console.log(name_1);

// Here the original value is not changed

let obj1 = {
    email : "keshav@gmail.com",
    upi : "billionaire@ybl"
}

let obj2 = obj1;

obj2.email = "Keshav@microsoft.com"

console.log(obj1.email);

// Here the obj2 is being changed but the changes also reflected in obj1 also
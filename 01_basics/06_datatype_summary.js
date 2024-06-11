// premitive datatype

// 7 types
// int , string , boolean , bigint , symbol, null, undefined

const num = 100;
const numval = 100.4;
const name = "Keshav";
const isloggedin = true;
const outsidetemp = null;

let useemail = undefined;  
// or
let usemail;

const id1 = Symbol('123');
const id2 = Symbol('123');

console.log(id1 === id2); // ->false
// symbol keyword will provide us the uniquesness 
// and the return type of this datatype is also symbol 




// Referance (Non premitive)

// Array , Objects, Functions

// Note :- the typeof datatype of these non premitive dattatypes id Object only 
// Note :- and for function the data-type will be object function


const names = ["Keshav" , "Abhay" , "Krishan"];

let myobj = {
    name : "Abhay",
    age : 21
}


let myfunction = function(){
    console.log("Hello World");
}

myfunction();

console.log(typeof myfunction);

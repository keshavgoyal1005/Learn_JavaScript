const email = "Keshavgoyal@microsoft.com";

if(email){
    console.log("Got your Email");
}
else{
    console.log("Did not get your email");
}

// Falsy value

// false , 0 , -0 , null , undefined , NAN , BigInt 0n 

//Thruthy Value

// "0" , 'false' , [] , {} , " " , function(){}

let useremail = [];

if(useremail.length === 0){
    console.log("Array is empty");
}

const myobj = {};

if(Object.keys(myobj).length === 0){
    console.log("Object is empty");
}




//Nullish Coalescing Operator (??)  -- used for null and undefined

let val ;

val = 5 ?? 10;
val = null ?? 11;
val = undefined ?? 12;
val = null ?? 22 ?? 33;

console.log(val);

//Terniary Operator

// condition ? true : false

const price = 80;

price>=50 ? console.log("price is greater than 50") : console.log("Price is less than 50");

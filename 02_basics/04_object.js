// const tinderuser = new Object();
// Note ; this is a singeltone object 

const tinderuser = {};

tinderuser.id = "123abx";
tinderuser.name = "Sam";
tinderuser.isloggedin = true;

// console.log(tinderuser);


const regularuse = {
    email : "keshavdikhani@microsoft.com",
    fullname: {
        completename:{
            firstname : "Keshav",
            lastname : "Goyal"
        }
    }
}

// console.log(regularuse.fullname.completename.lastname);


const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = {obj1 , obj2};
// console.log(obj3);

const obj4 = Object.assign(obj1 , obj2);
// console.log(obj4);

const obj5 = {...obj1 , ...obj2};         //spread method 
console.log(obj5);


const user = [
    {
        id : 1,
        email: "keshavgoyal@microsoft.com"
    },
    {
        id: 2,
        email: "keshavgoyal@google.com"
    },
    {
        id: 3,
        email: "keshavgoyal@apple.com"
    }
    
]

// here we made a array of objects

// console.log(user[1].email);


console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

const user = {
    name : "Keshav",
    price : 1000,

    myfunction: function(){
        console.log(`${this.name} , Welcome to this website`);
        console.log(this);            // Here this keyword will tell us the entire user object
    }

}

// user.myfunction();
// user.name = "Abhay";
// user.myfunction();

// console.log(this);               // Here this keyword will tell us the empty object because we are using the node environment


// function one(){
//     let username = "Keshav";
//     console.log(this);
//     // console.log(this.username);       // Here we can not use this 
// }
// one();


// const chai = function(){
//     let username = "Keshav";
//     console.log(this.username);        // we always show undefined 
//     console.log(this);
// }

// chai();


const chai = () => {
    let username = "Keshav";
    console.log(this.username);        // we always show undefined 
    console.log(this);                 // This will show the {} (empty object)
}

// chai();





// --------------------------------------Arrow function ----------------------------


//Explicit return
const sum = (num1 , num2) =>{
    return num1+num2;
}

console.log(sum(3 , 7));


// Here arrow function can also be written in this way because our return code is only for one line 

//Implicit return 

// const write = (num1 , num2)=> num1+num2;

const write = (num1 , num2)=> (num1+num2);      // If we are using this brackets then no need to write return keyword

console.log(write(5 , 10));


// if we want to return object using rrow function


const bro = () => ({username : "Keshav"});

console.log(bro());

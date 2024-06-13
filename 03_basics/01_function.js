function sayname(){
    console.log("K");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("V");
}

// sayname();
// sayname;      //it will not return anything because it will only tell that function lives over there

// function addtwonumber(number1 , number2){     // here the number1 and number2 are the parameters
//     console.log(number1+number2);
// }


function addtwonumber(number1 , number2){     // here the number1 and number2 are the parameters
    let result = number1+number2;
    return result;
}

// addtwonumber(2 , 3);       //here 2 and 3 are the arguments
// addtwonumber(2 , "a");
// addtwonumber(3 , null);

let temp = addtwonumber(2 , 3);
// console.log("Result " , temp);



function userloggedin(username = "sam"){    // here is username is not defined then it will take the value sam
    if(username === undefined){
        console.log(`invalid username`);
        return;        
    }
    return `${username} is logged in`;
}


console.log(userloggedin("Keshav"));
console.log(userloggedin());








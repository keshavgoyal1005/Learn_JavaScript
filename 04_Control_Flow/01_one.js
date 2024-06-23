//if

const isloggedin = true;
if(isloggedin){
    console.log("User is logged in");
}

if(2 == "2"){                                         // Here == does not compare the datatype
    console.log("user second is logged in");
}
if(2 === "2"){                                        // Here === also compare the datatype
    console.log("third user is logged in");
}
else{
    console.log("Not Logged in");
}

console.log("");
const balance = 500;

if(balance < 500){
    console.log("Balance is less than 500");
}
else if(balance === 500){
    console.log("Balance is rqual to 500");
}
else{
    console.log("Balance is greater than 500");
}

// global scope 
if(true){       //local scope
    let a = 10;
    const b = 20;
    var c = 30;
}


// console.log(a);    // this is not accasible 
// console.log(b);    // this is also not accessible 
console.log(c);



function one(){
    const username = "Keshav";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);          //Note : webite is not declared in this scope 

    two();
}

one();





if(true){
    const user  = "Keshav";
    if(user === "Keshav"){
        const company = "Microsoft";

        console.log(user + " " +company);
    }

    // console.log(company);          Note : error -> company is not is the scope 
}
// console.log(user);      // Note : error -> user is not in the scope





//------------------------------------------interesting----------------------------------------------


console.log(addone(5));                       //Note: Here it will execute 
function addone(num){
    return num+1;
}



// addtwo(7);                       // Note : Here it will show some error 
const addtwo = function(num){
    return num+6;
}


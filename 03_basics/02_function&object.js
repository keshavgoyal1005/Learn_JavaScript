function calculateCartPrice(...num){     // here the ... will be the rest operator 
    return num;
}

// console.log(calculateCartPrice(100 , 200 , 300));


function price(num1 , num3 , ...num){
    return num;
}

// console.log(price(100 , 200 , 300 , 400 , 500 ));


let user = {
    name : "Keshav",
    price : 10000,
    email : "keshavgoyal@microsoft.com"
}

function handleObject(myobj){
    console.log(`${myobj.name} purchase a item of worth ${myobj.price} and the email id is ${myobj.email}`)
}

// handleObject(user);

handleObject({
    name : "Abhay",
    price : 20000,
    email : "keshavgoyal@apple.com"
})






const arr = [111 , 222 , 333 , 444];

function returnSecondValue(brr){
    return brr[1];
}

console.log(returnSecondValue(arr));

console.log(returnSecondValue([777 , 888 , 999]));
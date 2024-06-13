// singleton
// object.create



//we are now talking about object literals 

const mysym = Symbol("key1");

const jsuser = {
    name : "Keshav",
    [mysym] : "mykey1",                       //syntex for symbol only
    age : 21,
    location : "jaipur",
    isloggedin : true , 
    lastloggedinday : ["monday" , "sunday"],
    email : "keshavgoyal@microssoft.com",
    "Full name" : "Keshav Goyal"

}                 // there are keys and values are there    


// Note: Here the name is already considered as "name" by the javascript but we don't have to mention this like that

// to access the object there are two methods 

console.log(jsuser.email);
console.log(jsuser["email"]);   // I already told that the key is taken as the string by the js
console.log(jsuser["Full name"]);   // full name can be accessed only thiss way 
console.log(jsuser[mysym]);
console.log(typeof jsuser[mysym]);


// console.log(jsuser);

jsuser.email = "Keshavgoyal@google.com";
// Object.freeze(jsuser);          // it will ensure that there will be no further change in the object

jsuser.email = "Keshavgoyal@apple.com";

console.log(jsuser["email"]);


// Note: first we have to remove the freeze command to make changes in the object

jsuser.greeting = function(){
    console.log("You will be very happy soon");
}

jsuser.greetingtwo = function(){
    console.log(`${this.name} very soon you will get a good news regarding your job`)
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());


//Note : somtimes we will see this undefined in the browser also

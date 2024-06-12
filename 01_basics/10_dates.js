let mydate = new Date();
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toString());

console.log(typeof mydate);   // Note

let currentdate = new Date(2023 , 5 , 5);

console.log(currentdate.toDateString());
console.log(currentdate.toLocaleDateString());

let mydateone = new Date("2023-1-10");
console.log(mydateone.toDateString());

let mydatetwo = new Date(2023, 5, 10, 5, 6);
console.log(mydatetwo.toLocaleString());

let timestamp = Date.now();
console.log(timestamp);  // returns the number of milliseconds since January 1, 1970.
console.log(Math.floor(timestamp/1000));  // returns the number of seconds since January 1, 1970.



let newdate = new Date("2003-5-10");
console.log(newdate.getMonth() +1); // beacuse the january is considered as the 0th month


newdate.toLocaleString('default' , {
    weekday : 'long',

})                        // here we can customize this tolocalstring function further also


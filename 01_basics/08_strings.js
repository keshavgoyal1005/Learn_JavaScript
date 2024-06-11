let name = "Keshav";
let age = 21

console.log("my name is " + name + " my age is " + age ); // Not a good practise

console.log(`my name is ${name} & my age is ${age}`); // Good practise

const gamename = new String("Keshav-KG");

console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('K'));

const newstring = gamename.substring(0 , 4);
console.log(newstring);

const anotherstring = gamename.slice(-8 , 4);
console.log(anotherstring);


const newstringone = "    Keshav   ";
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://keshav.com/keshav%20goyal"

console.log(url.replace('%20' , '-'));
console.log(url.includes('goyal'));

console.log(gamename.split('-'));
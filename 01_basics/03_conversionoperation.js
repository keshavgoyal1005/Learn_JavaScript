let score = 33;
let scorea = "33";

console.log(typeof score);    // -> This is the standard way
console.log(typeof(scorea));  // -> we can also find typeof using this method

let changeda = Number(scorea);
console.log(typeof changeda);
console.log(changeda);


let scoreb = "33abc";
let changed_b = Number(scoreb);
console.log("");
console.log(typeof changed_b);
console.log(changed_b);

let scorec = null;
let chnaged_c = Number(scorec);
console.log("Null ->" , chnaged_c);

let scored = undefined;
let changed_d = Number(scored);
console.log("undefined-> " , changed_d);


// 33 -> number
// "33abc" -> NAN
// true -> 1 , false -> 0


let isloggedin = "Keshav";
let changed_e = Boolean(isloggedin);
console.log(changed_e);

// 1 -> true , 0->false
// "" -> false , "Keshav" -> true



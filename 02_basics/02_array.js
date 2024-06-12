const names = ["Keshav" , "Krishan" , "Abhay"];
const morenames = ["Ram" , "Shyam" , "Shiva"];

// names.push(morenames);
// console.log(names);
// console.log(names[3]);

// const allname = names.concat(morenames);
// console.log(allname);



//spread operator in arrays
let all_newnames = [...names , ...morenames];
console.log(all_newnames);


//flat method 

let new_array = [1, 2, [4 , 5] , 10 , [7 , [8 , 9]]];
let flated_new_arr = new_array.flat(Infinity);      // here infinty is written for how much depth we have to solve 
console.log(flated_new_arr);




console.log(Array.isArray("Keshav"));
console.log(Array.from("Keshav"));
console.log(Array.from({name : "Keshav"}))   // here it will return the empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));

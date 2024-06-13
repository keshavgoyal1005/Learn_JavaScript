const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(5));

const othernum = 123.886;
console.log(othernum.toPrecision(4));

const num1 = 1000000;
console.log(num1.toLocaleString('en-IN'));



//-------------------------------Maths------------------------------------------

console.log("");
console.log("Maths-Library");
console.log("");

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(3.7));
console.log(Math.floor(3.1));
console.log(Math.ceil(2.9));
console.log(Math.min(1,3,0,10));

console.log(Math.random()); // always its value is from 0 to 1
console.log((Math.random() * 10) +1);
console.log(Math.floor(Math.random()*10) +1);


const mini = 10;
const maxi = 20;

console.log(Math.floor(Math.random() * (maxi-mini+1)) + mini);






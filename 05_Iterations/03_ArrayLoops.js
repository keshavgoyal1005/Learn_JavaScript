const arr = [1, 2, 3, 4, 5];


// --------------------------------------Forof Loop-------------------------------
for (const num of arr) {
    // console.log(num);    
}

const username = "Keshav Goyal";
for (const character of username) {
    // console.log(character);
}


//Map

const map = new Map();
map.set('IN' , "India");
map.set('US' , "United States");
map.set('UK' , "United Kingdom");
map.set('Eu' , "Europe");

for (const [key , value] of map) {
    console.log(key , ' - ' , value);
}


const obj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key , value] of obj) {         // Note : This will show that my object is not iterable
//     console.log(key , ' - ' , value);
// }
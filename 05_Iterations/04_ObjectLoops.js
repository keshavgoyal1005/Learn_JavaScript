//--------------------------------ForIn Loop--------------------------

const myobject = {
    js: "Javascript",
    cpp: "c++",
    py: "python",
    go: "Goloang"
}

for (const key in myobject) {
    // console.log(key, ' - ', myobject[key]);

}

const arr = [1, 2, , 34, 5];

for (const key in arr) {
    // console.log(arr[key]);
}




const map = new Map();
map.set('IN' , "India");
map.set('US' , "United States");
map.set('UK' , "United Kingdom");
map.set('Eu' , "Europe");


for (const key in map) {      //Note : Map is not iterable so there will be no outpur here 
    console.log(map[key]);
}
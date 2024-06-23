// Immediately Invoked Function Expressions IIFE
 
(function chai(){                                 // Named IIFE
    console.log("DB CONNECTED");
})();


// here there are two parenthasis 

// ()()
// this first one is for writing the defination of function
// and second one is whre we want to exexute the function


( () => {
    console.log("SECOND DB CONNECTED");
})();

( (name) => {
    console.log(`SECOND DB CONNECTED , ${name}`);
})("Keshav");
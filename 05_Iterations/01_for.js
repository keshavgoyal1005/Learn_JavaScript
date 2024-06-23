let array = [1,2,3,4];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);    
}


//Nested Loop
// for (let i = 0; i < 4; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 0; j < 4; j++) {
//         console.log(`inner loop value ${j} and outer loop value ${i}`);
//     }
// }


//break and continue

// for (let i = 0; i <=20 ; i++) {
//     const element = i;

//     if(element == 5){
//         console.log("Five Didected");
//         break;
//     }
//     console.log(element);
// }


for (let i = 0; i <=20 ; i++) {
    const element = i;

    if(element == 5 || element == 6){
        console.log("Five Didected");
        continue;
    }
    console.log(element);
}
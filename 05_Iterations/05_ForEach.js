const language = [ "js", "cpp", "go", "rust", "python" ];

// language.forEach(function (item){
//     console.log(item);
// })

// language.forEach( (item) =>{
//     console.log(item);
// })


function print(item){
    // console.log(item);
}

language.forEach(print);


language.forEach((item , index , arr) =>{
    // console.log(item, index , arr);
})






const mycoding = [
    {
        languageName : "javascript",
        FileNmae : "js"
    },
    {
        languageName : "c++",
        FileNmae : "cpp"
    },
    {
        languageName : "golang",
        FileNmae : "go"
    }

]


mycoding.forEach((item)=>{
    console.log(item.languageName);
})

// const coding = ["js" , "CPP" , "Golang" , "ruby"];

// const values = coding.forEach(item => {
//     // console.log(item);
//     return;
// });

// console.log(values);    // Here the foreach loop will give us the undefined values


const mynum = [1, 2, 3, 4, 5, 6, 7];

// const value = mynum.filter((num)=> num>3 )     //NOTE :- It is a implicit return

// const value = mynum.filter((item)=>{           //NOTE :- It is a explicit return
//     return item>4
// })

// console.log(value);


const arr = [];

mynum.forEach((item)=>{
    if(item>3){
        arr.push(item);
    }
})

console.log(arr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let booki = books.filter((item)=>{
    return item.publish>=1999;
  })

//   console.log(booki);

  let booky = books.filter((item)=> item.genre === 'Science');

  console.log(booky);
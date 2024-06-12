const course = {
    coursenme : "Javascript-tutorial",
    price : 999,
    courseinsstructor : "Hitesh-sir"
}

// console.log(course.courseinsstructor);

// so we can destructure the key name of the object
const {courseinsstructor :instructor} = course

// console.log(courseinsstructor);
console.log(instructor);


// --------------------------------API----------------------------------------

// data we get from a API will be in the form of JSON and the JSON is basically a object 
// sometimes the data of API is in the form of Array also

// {
//     "name" : "keshav",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }                             // right notation of a JSON file 





// [
//     {},
//     {},
//     {}
// ]





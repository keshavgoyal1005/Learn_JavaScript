const buttons  = document.querySelectorAll('.box');
// console.log(buttons);
const body = document.querySelector('body');
const message = document.querySelector('.message h3');

buttons.forEach(function(button){
  // console.log(button);
  button.addEventListener('click' , function(e){
    // console.log(e);
    // console.log(e.target);
    if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id;
        message.textContent = `Color changed to ${e.target.id}`
    }
    if(e.target.id === "green"){
        body.style.backgroundColor = e.target.id;
        message.textContent = `Color changed to ${e.target.id}`
    }
    if(e.target.id === "aqua"){
        body.style.backgroundColor = e.target.id;
        message.textContent = `Color changed to ${e.target.id}`
    }
    if(e.target.id === "red"){
        body.style.backgroundColor = e.target.id;
        message.textContent = `Color changed to ${e.target.id}`
    }
  })
})




// footer

$(document).ready(function () {
    let year = document.querySelector('#year');
    year.innerText = new Date().getFullYear();
});
const form = document.querySelector('form');
console.log("Hello");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const res = document.querySelector('.output');

    if (height <= 0 && weight <= 0) {
        res.innerHTML = "Please enter a height and weight greater than 0";
    }
    else if (height <= 0) {
        res.innerHTML = "Please enter a height greater than 0";
    } else if (weight <= 0) {
        res.innerHTML = "Please enter a weight greater than 0";
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        res.innerHTML = `Your BMI is: <span>${bmi}</span>`;
    }
});



// footer

$(document).ready(function () {
    let year = document.querySelector('#year');
    year.innerText = new Date().getFullYear();
});
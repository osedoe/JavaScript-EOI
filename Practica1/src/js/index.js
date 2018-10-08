/*** index.js ***/

const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');

const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');


const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

btn1.addEventListener('click', () => {
    let number = getRandomNumber(1, 6);
    span1.textContent = number;
});
btn2.addEventListener('click', () => {
    let number = getRandomNumber(1, 6);
    span2.textContent = number;
});
btn3.addEventListener('click', () => {
    let number = getRandomNumber(1, 6);
    span3.textContent = number;
});
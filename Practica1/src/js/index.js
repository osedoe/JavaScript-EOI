/*** index.js ***/
// Declaracion de variables
const btnArr = document.querySelectorAll('.box button');
const spanArr = document.querySelectorAll('.box .dice span');
const hist = document.querySelector('#history');
const reset = document.querySelector('#reset');

const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;



btnArr[0].addEventListener('click', () => {
    let number = getRandomNumber(1, 6);
    spanArr[0].textContent = number;
    hist.textContent += `${number}   `;
});
btnArr[1].addEventListener('click', () => {
    let number = getRandomNumber(1, 6);
    spanArr[1].textContent = number;
    hist.textContent += `${number}   `;
});
btnArr[2].addEventListener('click', () => {
    let number = getRandomNumber(1, 6);
    spanArr[2].textContent = number;
    hist.textContent += `${number}   `;
});

reset.addEventListener('click', () => {
    hist.textContent = '';
});
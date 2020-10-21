"use strict";
// let myArgs:string = process.argv[2];
// let message:string = 'hello world.'
// console.log(message);
// let number1: number = 5;
// let number2: number = 10;
// console.log(number1 + number2)
// const greeter = (person:string) => {
//     return `Hello, ${person}!`;
// }
// const generateNumber = (num) => {
//     return num;
// }
// console.log(greeter(myArgs))
// console.log(myArgs);
//creating choice for computer
var getRandomComputerChoice = function () {
    var randomNumber = (Math.ceil(Math.random() * 3));
    if (randomNumber === 1)
        return 'rock';
    if (randomNumber === 2)
        return 'paper';
    if (randomNumber === 3)
        return 'scissors';
};
//initialize state 
var win = 0;
var draw = 0;
var loss = 0;
//create array forEach loop to add value for radio buttons
var radioButtonChoices = ['rock', 'paper', 'scissors'];
var body = document.querySelector('body');
var section = document.createElement('section');
var form = document.createElement('form');
//creating the radio buttons
radioButtonChoices.forEach(function (item) {
    var label = document.createElement('label');
    var radioButton = document.createElement('input');
    var span = document.createElement('span');
    span.textContent = item;
    radioButton.type = 'radio';
    radioButton.value = item;
    radioButton.name = 'rock-paper-scissors';
    radioButton.check = false;
    label.append(radioButton, span);
    form.appendChild(label);
});
//Adding button to form
var gameButton = document.createElement('button');
gameButton.textContent = 'Let\'s play a game';
form.appendChild(gameButton);
//creating the DOM 
var resultsSpan = document.createElement('span');
var computerSpan = document.createElement('span');
var winSpan = document.createElement('span');
var loseSpan = document.createElement('span');
var drawSpan = document.createElement('span');
winSpan.textContent = "Wins: " + win;
section.appendChild(winSpan);
loseSpan.textContent = "Losses: " + loss;
section.appendChild(loseSpan);
drawSpan.textContent = "Draws: " + draw;
section.appendChild(drawSpan);
section.appendChild(form);
body.appendChild(section);
gameButton.addEventListener('click', function (e) {
    e.preventDefault();
    var checkedValue = document.querySelector(':checked');
    var userChoice = checkedValue.value;
    var computerChoice = getRandomComputerChoice();
    var result = didUserWin(userChoice, computerChoice);
    computerSpan.textContent = " Computer: " + computerChoice;
    resultsSpan.textContent = " You : " + result;
    updateScore(result);
    section.append(resultsSpan, computerSpan);
});
var didUserWin = function (userChoice, computerChoice) {
    if (userChoice === computerChoice)
        return 'Draw';
    if (userChoice === 'rock' && computerChoice === 'scissors')
        return 'Won';
    if (userChoice === 'rock' && computerChoice === 'paper')
        return 'Lost';
    if (userChoice === 'scissors' && computerChoice === 'paper')
        return 'Won';
    if (userChoice === 'scissors' && computerChoice === 'rock')
        return 'Lost';
    if (userChoice === 'paper' && computerChoice === 'rock')
        return 'Won';
    if (userChoice === 'paper' && computerChoice === 'scissors')
        return 'Lost';
};
var updateScore = function (condition) {
    if (condition === 'Won') {
        win++;
        winSpan.textContent = "Wins: " + win;
    }
    else if (condition === 'Lost') {
        loss++;
        loseSpan.textContent = "Losses: " + loss;
    }
    else {
        draw++;
        drawSpan.textContent = "Draws: " + draw;
    }
};

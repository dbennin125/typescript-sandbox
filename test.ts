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
const getRandomComputerChoice = () => {
    const randomNumber: number = (Math.ceil(Math.random() * 3))
   if(randomNumber === 1) return 'rock'
   if(randomNumber === 2) return 'paper';
   if(randomNumber === 3) return 'scissors'
}



//initialize state 
let win:number = 0;
let draw:number = 0;
let loss:number = 0;

//create array forEach loop to add value for radio buttons
const radioButtonChoices = ['rock', 'paper', 'scissors'] as const;

const body:any = document.querySelector('body');
const section:Element =document.createElement('section');
const form:Element = document.createElement('form');

//creating the radio buttons
radioButtonChoices.forEach(item => {
    const label:Element = document.createElement('label');
    const radioButton: any = document.createElement('input');
    const span: any = document.createElement('span');
    span.textContent = item;


    radioButton.type = 'radio';
    radioButton.value = item;
    radioButton.name = 'rock-paper-scissors';
    radioButton.check = false
    
    label.append(radioButton, span);
    form.appendChild(label);
});


//Adding button to form
const gameButton = document.createElement('button')
gameButton.textContent = 'Let\'s play a game'
form.appendChild(gameButton);

//creating the DOM 
const resultsSpan:Element = document.createElement('span');
const computerSpan:Element = document.createElement('span');
const winSpan:Element = document.createElement('span');
const loseSpan:Element = document.createElement('span');
const drawSpan:Element = document.createElement('span');

winSpan.textContent = `Wins: ${win}`;
section.appendChild(winSpan);

loseSpan.textContent = `Losses: ${loss}`;
section.appendChild(loseSpan);

drawSpan.textContent = `Draws: ${draw}`;
section.appendChild(drawSpan);


section.appendChild(form);
body.appendChild(section);

gameButton.addEventListener('click', (e) => {
    e.preventDefault();
   const checkedValue:any = document.querySelector(':checked')
   const userChoice:string = checkedValue.value;
   const computerChoice:any = getRandomComputerChoice();

   const result:any = didUserWin(userChoice, computerChoice);
   computerSpan.textContent = ` Computer: ${computerChoice}`

   resultsSpan.textContent = ` You : ${result}`;
   updateScore(result) 
   section.append(resultsSpan, computerSpan);

})


const didUserWin = (userChoice:string, computerChoice:string) => {
    if(userChoice === computerChoice) return 'Draw';
    if(userChoice === 'rock' && computerChoice === 'scissors') return 'Won';
    if(userChoice === 'rock' && computerChoice === 'paper') return 'Lost';
    if(userChoice === 'scissors' && computerChoice === 'paper') return 'Won';
    if(userChoice === 'scissors' && computerChoice === 'rock') return 'Lost';
    if(userChoice === 'paper' && computerChoice === 'rock') return 'Won';
    if(userChoice === 'paper' && computerChoice === 'scissors') return 'Lost';
}

const updateScore = (condition:string) => {
    if(condition === 'Won') {
        win++
        winSpan.textContent = `Wins: ${win}`;
    } else if(condition === 'Lost') {
        loss++;
        loseSpan.textContent = `Losses: ${loss}`;
    } else {
        draw++;
        drawSpan.textContent = `Draws: ${draw}`;
    } 
} 

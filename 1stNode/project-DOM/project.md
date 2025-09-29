# project related link

# project link
[click here]()

# solution code

## project 1
```javascript
const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body")

buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    if(e.target.id==="pink"){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="lightskyblue"){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="maroon"){
      body.style.backgroundColor=e.target.id;
    }
  })

})
```
## projecrt 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const result=document.querySelector('#result')

if(height===''|| height<0 || isNaN(height)){
    result.innerHTML=`enter a valid height`


}
else if(weight=== ''|| weight<0 || isNaN(weight)){
    result.innerHTML=`enter a valid weight`
    

} else {
    const heightInM = height / 100; 
    const BMI = (weight / (heightInM * heightInM)).toFixed(2);

    let category = '';
    if (BMI < 18.5) {
      category = 'Underweight';
    } else if (BMI < 24.9) {
      category = 'Normal weight';
    } else if (BMI < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

   
    result.innerHTML = `
      Your BMI is ${BMI} <br>
      Category: ${category} <br>
    `;
  }
});

```

## project 3
```javascript
const clock = document.getElementById('clock');
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
## project 4
``` javascript
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMsg(`You guessed it right!`);
    endGame();
  } else if (guess < randomNum) {
    displayMsg(`Number is too low`);
  } else {
    displayMsg(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    lowOrHi.innerHTML = '';
    playGame = true;
  });
}
```
## project 5

```html
<!DOCTYPE html>
<html>
  <head>
    <meta>
    
  </head>
  <body style="background-color: grey;">
    <h1 id="h1" style="color: white;">Color wheel</h1>
    <button id="st">START</button>
    <button id="stp">STOP</button>
  </body>
  <script >
  const r_color=function(){
  const hex='123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    color+= hex[Math.floor(Math.random()*16)]
  }
  return color
}
let inerval
const start_c=function(){
  inerval=setInterval(bgcolor,500)
  function bgcolor(){
    document.body.style.backgroundColor=r_color()
  }
}

const stop_c=function(){
  clearInterval(inerval)
}


document.querySelector('#st').addEventListener('click',start_c)
document.querySelector('#stp').addEventListener('click',stop_c)
    
    </script>
</html>
```

# Maths Quiz

## Project modules:
- _Timer Module_
- _Score Module_
- _Question and Answer Module_
- _Answer validation Module_
- _Start and End Quiz_

## Project in Detail:

### - _Random Function_:
> A good round off between the limits is the best Random number one can get.

> Uses Math module to calculate random number.

```javascript
// Generates a random number in the range min -> max.
function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
```

### - _Timer Module_:
> Uses setInterval() function in Javascript to update time in a Div. 
Set initial time to 30 seconds and decrease it.
if time is 0 seconds, stop the game.

```javascript
// Initializes time to 30 seconds
function setTime() {
  document.getElementById("time").textContent = 30;
}

// Keeps on decreasing time every second
function time() {
  var countdown = setInterval(function() {
      var seconds = document.getElementById("time").textContent;
      seconds--;
      document.getElementById("time").textContent = seconds;
      if (seconds <= 0) {
        clearInterval(countdown);
        gameOver();
      }
  }, 1000);
}
```

### - _Score Module_:
> If the answer is correct, update the score using Div Replacement.
```javascript
// Increases score if answer is correct
if(choosenOption == ans) {
    score++;
    document.getElementById('score').innerHTML = score;
}
```

### - _Question and Answer Module_:
> Two random numbers and an Arithmetic operator is generated randomly.
Answer is the operation between those two numbers.
Four more options are generated such that no option is repeated and is displayed in the Question and Options divs respectively.

### - _Answer validations Module_:
> After answer is generated, it is stored globally in var **ans**.
Then check function is called when a option is clicked. 
If correct answer is chosen, Background of the clicked div turns green and game starts again in a second.
If the answer is wrong, background turns red and game ends. 

```javascript
// Checks if the answer is right or wrong
function check(ch1) {
  var n = ch1.substring(ch1.length - 1);
  var ch2 = document.getElementById('ans'+n).innerHTML;
  if(ch2 == ans) {
    document.getElementById("answer"+n).style.backgroundColor = 'Green';
    setInterval(function() { start(); },1000);
  }
  else {
    document.getElementById("answer"+n).style.backgroundColor = 'Red';
    setInterval(function() { gameOver(); },1000);
  }
  return;
}
```

### - _Start and End Quiz_:
> Uses div replacement to change between divs to start/end the quiz.

```javascript
//Displaying Main Block and starts timer.
function display() {
  document.getElementById('start').style.display = 'None';
  document.getElementById('main').style.display = 'Block';
  timeMe();
}
```

### Tech Stack Used:
> - HTML, CSS, JS

### Follow for more: 
> [Eswar Benarjee Github Profile](https://github.com/EswarBenarjee/imageCompressor "Eswar Benarjee")
var ans = 0;
var score = 0;

//Proper Random Function
function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Displaying Main Block
function display() {
  document.getElementById('start').style.display = 'None';
  document.getElementById('main').style.display = 'Block';
  timeMe();
}

function reset() {
  document.getElementById('score').innerHTML = "0";
  setTime();
  start();
}

function setTime() {
  document.getElementById("time").textContent = 30;
}

function timeMe() {
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

function gameOver() {
  document.getElementById('main').style.display = 'None';
  document.getElementById('over').style.display = 'block';
  document.getElementById('scoreOver').innerHTML = score;
}

function start() {
  var n1 = getRndInt(1, 100);
  var n2 = getRndInt(1, 100);
  document.getElementById('leftop').innerHTML = n1;
  document.getElementById('rightop').innerHTML = n2;
  var n3 = Math.floor(Math.random() * 5);
  if(n3==1) {
    document.getElementById('operand').innerHTML = '+';
    ans = n1+n2;
  } else if (n3==2) {
    document.getElementById('operand').innerHTML = '-';
    ans = n1-n2;
  } else if (n3==3) {
    document.getElementById('operand').innerHTML = '*';
    ans = n1*n2;
  } else {
    document.getElementById('operand').innerHTML = '%';
    ans = n1%n2;
  }
  const a = [];
  a[0] =  getRndInt(ans-5, ans+5);
  while (true) {
    if(a[0]==ans) {
      a[0] =  getRndInt(ans-5, ans+5);
    }
    else {
      break;
    }
  }
  a[1] =  getRndInt(ans-5, ans+5);
  while (true) {
    if(a[1]==ans || a[1]==a[0]) {
      a[1] =  getRndInt(ans-5, ans+5);
    }
    else {
      break;
    }
  }
  a[2] =  getRndInt(ans-5, ans+5);
  while (true) {
    if(a[2]==ans || a[2]==a[0] || a[2]==a[1]) {
      a[2] =  getRndInt(ans-5, ans+5);
    }
    else {
      break;
    }
  }
  a[3] = ans;

  const b = [];
  for (var i = 0; i < a.length; i++) {
    var r = getRndInt(0,3);

    while(true) {
      var ch = 1;
      for (var j = 0; j < b.length; j++) {
        if(r==b[j]) {
          ch = 0;
        }
      }
      if(ch==0) {
        r = getRndInt(0,3);
      }
      else {
        break;
      }
    }

    document.getElementById('ans'+r).innerHTML = a[i];
    b[i] = r;
  }
}

start();

function check(ch1) {
  var n = ch1.substring(ch1.length - 1);
  var ch2 = document.getElementById('ans'+n).innerHTML;
  if(ch2 == ans) {
    document.getElementById("answer"+n).style.backgroundColor = 'Green';
    score++;
    document.getElementById('score').innerHTML = score;
    setTimeout(function() {start();} , 200 );
    setTimeout(function() {document.getElementById("answer"+n).style.backgroundColor = 'White';} , 200 );
    setTimeout(function() {setTime();} , 200 );
  }
  else {
    document.getElementById("answer"+n).style.backgroundColor = 'Red';
    setInterval(function() { gameOver(); },1000);
  }
  return;
}

let time = 10;
let timerID = null;


window.onload = function () {
  startTimer();
};


function startTimer() {
  timerID = setInterval(function () {
    time--;
    document.getElementById("time").innerHTML = time;

    if (time <= 0) {
      clearInterval(timerID);
      timeUp();
    }
  }, 1000);
}

function timeUp() {
  let result = document.getElementById("quizResult");
  result.innerHTML = "時間切れです ⏰";
  result.style.color = "blue";
}

function nazo1() {
  var ans = document.getElementById("answer").value;

  clearInterval(timerID);

  let result = document.getElementById("answer");

  if (ans == "モノマネ") {
    document.getElementById("result").textContent = "あたり！";
  } else {
    document.getElementById("result").textContent = "はずれ";
  }
}


function imgLarge() {
  document.getElementById("quizImg").className = "imageLarge";
}

function imgSmall() {
  document.getElementById("quizImg").className = "imageSmall";
}

function imgNormal() {
  document.getElementById("quizImg").className = "imageNormal";
}


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


function nazo() {
  clearInterval(timerID);

  let ans = document.getElementById("answer").value;
  let result = document.getElementById("quizResult");

  if (ans === "モノマネ") {
    result.textContent = "あたり！";
    result.style.color = "green";
  } else {
    result.textContent = "はずれ";
    result.style.color = "red";
  }
}


function imgLarge() {
  document.getElementById("./image./q4163.jpg").className = "imageLarge";
}

function imgSmall() {
  document.getElementById("./image./q4163.jpg").className = "imageSmall";
}

function imgNormal() {
  document.getElementById("./image./q4163.jpg").className = "imageNormal";
}



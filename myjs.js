let time = 60; 
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

  let ans = document.getElementById("answer").value.trim();
  let result = document.getElementById("quizResult");

  if (ans === "モノマネ") {
    result.textContent = "あたり！";
    result.style.color = "green";
  } else {
    result.textContent = "はずれ";
    result.style.color = "red";
  }
}




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

function quizAnswer(answer) {
  clearInterval(timerID);

  let result = document.getElementById("quizResult");

  if (answer === "HTML") {
    result.innerHTML = "正解！🎉 HTMLです";
    result.style.color = "green";
  } else {
    result.innerHTML = "不正解…😢";
    result.style.color = "red";
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


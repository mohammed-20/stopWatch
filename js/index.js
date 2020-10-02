
const playBtn = document.getElementById("playButton");
const pauseBtn = document.getElementById("pauseButton");
const resetBtn = document.getElementById("resetButton");


let timeToString = (time) => {
  let hour = time / 3600000;
  let hr = Math.floor(hour);

  let Minute = (hour - hr) * 60;
  let min = Math.floor(Minute);

  let second = (Minute - min) * 60;
  let sec = Math.floor(second);

  let millisecond = (second - sec) * 100;
  let ms = Math.floor(millisecond);

  let formattedMM = min.toString().padStart(2, "0");
  let formattedSS = sec.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}



let startTime;
let elapsedTime = 0;
let timerInterval;



function print(txt) {
  document.getElementById("display").textContent = txt;
}



function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
}

// Create function to display buttons

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}
// Create event listeners



playBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);



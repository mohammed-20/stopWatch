
const playBtn = document.getElementById("playButton");
const pauseBtn = document.getElementById("pauseButton");
const resetBtn = document.getElementById("resetButton");
const stopWatchTxt = document.getElementById("stopWatch");
const timerTxt = document.getElementById('timer');
const timerBtn = document.getElementById('timerButton');
const inpTimer = document.getElementById('inpTimer');
const display = document.getElementById("display");


const timeToString = (time) => {
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
};


let startTime;
let elapsedTime = 0;
let timerInterval;


let print = (txt) => {
  display.textContent = txt;
};

const  start = () => {
  startTime = Date.now() - elapsedTime;
  console.log(startTime)
  timerInterval = setInterval( () => {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

const pause = () => {
  clearInterval(timerInterval);
  showButton("PLAY");
}

const reset = () => {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
}
const showButton= (buttonKey) => {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
};

const hidden = ()=>{
  document.getElementById("buttonReset").hidden = true;
 document.getElementById("inpTimer").hidden=false;
};

const show = ()=>{
  document.getElementById("buttonReset").hidden = false;
 document.getElementById("inpTimer").hidden=true;
};
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
timerTxt.addEventListener("click", hidden);
stopWatchTxt.addEventListener("click", show);
playBtn.addEventListener('click', () =>{
  console.log(inpTimer.hidden);
if(inpTimer.hidden){
  start();
}else{
  timerContent();
  showButton("PAUSE");
};
});


const timerContent = () =>{
  const timerValue = inpTimer.value;
  let time = timerValue * 60;
console.log(time)
if(timerValue >= 0){
  timerInterval=setInterval(()=>{
    let minTimer = Math.floor(time / 60);
    let secTimer = time % 60;
    console.log(minTimer,secTimer);
    let txt = textContent = `${minTimer}:${secTimer}`;
    print(txt);
    if (time > 0){
      time--;
    }else{
      time=0;
    };
  }, 1000)
};
};



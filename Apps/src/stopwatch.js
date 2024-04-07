const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateStopwatch, 10);
    isRunning = true;
  }
}

function stopStopwatch() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function resetStopwatch() {
  clearInterval(timer);
  display.textContent = "00:00:00.00";
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
}

function updateStopwatch() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  display.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
}

startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);

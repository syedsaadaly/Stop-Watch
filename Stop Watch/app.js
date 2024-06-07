const display = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let startTime;
let elapsedTime = 0;
let intervalId;

function updateDisplay() {
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const displayString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${Math.floor((elapsedTime % 1000) / 10)}`;
    display.textContent = displayString;
}

// function startTimer() {
//     startTime = Date.now();
//     intervalId = setInterval(() => {
//         elapsedTime = Date.now() - startTime;
//         updateDisplay();
//     }, 10);
//     startBtn.disabled = true;
//     stopBtn.disabled = false;
//     resetBtn.disabled = false;
// }
function startTimer() {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}


function stopTimer() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
}

function resetTimer() {
    elapsedTime = 0;
    updateDisplay();
    stopTimer();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
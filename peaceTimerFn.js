let twentySecondsBtnElement = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnElement = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnElement = document.getElementById("fortySecondsBtn");
let oneMinuteBtnElement = document.getElementById("oneMinuteBtn");
let textTimerElement = document.getElementById("timerText");

let timerId;
const textTimerCompleted = "Your moment is complete";
let secondsLeft = 0;

function clearPreviousTimer() {
    clearInterval(timerId);
}

function startTimer() {
    if (secondsLeft > 0) {
        secondsLeft -= 1;
        textTimerElement.textContent = secondsLeft + " seconds left";
    }else {
        clearPreviousTimer();
        textTimerElement.textContent = textTimerCompleted;
    }
}

function setAndShowTimer() {
    timerId = setInterval(startTimer, 1000);
}

twentySecondsBtnElement.onclick = function() {
    secondsLeft = 20;
    clearPreviousTimer();
    setAndShowTimer();
};

function thirtySecondsPeaceTimer() {
    secondsLeft = 30;
    clearPreviousTimer();
    setAndShowTimer();
}
thirtySecondsBtnElement.addEventListener("click", thirtySecondsPeaceTimer);

fortySecondsBtnElement.onclick = function() {
    secondsLeft = 40;
    clearPreviousTimer();
    setAndShowTimer();
};


function oneMinutePeaceTimer() {
    secondsLeft= 60;
    clearPreviousTimer();
    setAndShowTimer();
}
oneMinuteBtnElement.addEventListener("click", oneMinutePeaceTimer);
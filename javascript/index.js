import Timer from "./timer.js"

import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonMore,
    buttonLess,
    darkMode
} from "./elements.js";

import initSoundsButtons from "./sound.js";

initSoundsButtons()

const timer = Timer({minutesDisplay, secondsDisplay, buttonPause, buttonMore})

buttonPlay.addEventListener('click', function() {
    timer.startStopTimer()  
})

buttonPause.addEventListener('click', function() {
    timer.resetCountDown()
})

buttonMore.addEventListener('click', function() {
    timer.addMinutes()
})

buttonLess.addEventListener('click', function() {
    timer.removeMinutes()
})

darkMode.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})



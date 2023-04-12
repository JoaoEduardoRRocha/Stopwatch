export default function Timer({
    minutesDisplay,
    secondsDisplay,
    buttonPause,
    buttonMore,
    buttonLess,
    controls
}) {
    let timerTimeOut;
    let defaultMinutes = 30;
    let defaultSeconds = 0;
    let minutes = 30;
    let seconds = 0;
    let isPlaying = false;

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    function countDown() {
        timerTimeOut = setTimeout(function() {
            seconds =  Number(secondsDisplay.textContent)
            minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            updateDisplay(minutes, 0)

            if(isFinished) {
                /*resetControls()*/
                updateDisplay()
                /*Sounds()*/./*timeEnd()*/
                return
              }

            if(seconds <= 0) {
                seconds = 60
                --minutes
              }

            updateDisplay(minutes, String(seconds - 1))
            
            countDown()
        }, 1000)
    }

    function startStopTimer(){
        if(isPlaying){
            isPlaying = false;
            clearTimeout(timerTimeOut);
            updateDisplay(minutes, seconds-1);
        }else{
            isPlaying = true;
            countDown();
        }
    }

    function resetCountDown(){
        clearInterval(timerTimeOut)
        updateDisplay(defaultMinutes, defaultSeconds)
    }

    function addMinutes(){
        minutes += 5;
        updateDisplay(minutes, seconds)
    }

    function removeMinutes(){
        minutes -= 5;
        updateDisplay(minutes, seconds)
    }
        
    return {
        startStopTimer,
        resetCountDown,
        addMinutes,
        removeMinutes,
    }
}

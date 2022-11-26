export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls
}) 
/*desestruturar objeto*/{
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2,'0')
    secondsDisplay.textContent = String(seconds).padStart(2,'0')
  }
  
  function reset() {
    updateDisplay(minutes, 0) 
    clearTimeout(timerTimeOut)
  }
  
  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      updateDisplay(minutes, 0)
  
      if (minutes <= 0) {
        resetControls()
        return
      }
  
      if (seconds <= 0) {
        seconds = 3
        --minutes //decrementar o minutes
      }
  
      updateDisplay(minutes, String(seconds -1))
  
      countdown()
    }, 1000) // 1000 = é em milesegundos, ou seja, 1000ms = 1s
  }

  return {
    countdown,
    reset,
    updateDisplay,
  }
}

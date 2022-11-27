import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  sound
})/*desestruturar objeto*/{
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    // falsy
      // false
      // 0
      // ""
    // truthy
      // true
      // {}
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
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
      let isFinished = minutes <= 0 && seconds <= 0
  
      updateDisplay(minutes, 0)
  
      if (isFinished) {
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        --minutes //decrementar o minutes
      }
  
      updateDisplay(minutes, String(seconds -1))
  
      countdown()
    }, 1000) // 1000 = é em milesegundos, ou seja, 1000ms = 1s
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function holdTheTime() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    holdTheTime,
  }
}

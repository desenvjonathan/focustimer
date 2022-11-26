// DOM 
// Document Object Model
// Refatoração: mudar um código para deixá-lo mais entendível e performático, sem alterar suas funcionalidades
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function resetControls() { //programação imperativa (o que precisa ser feito)
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2,'0')
  secondsDisplay.textContent = String(seconds).padStart(2,'0')
}

function resetTimer() {
  updateTimerDisplay(minutes, 0) 
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 3
      --minutes //decrementar o minutes
    }

    updateTimerDisplay(minutes, String(seconds -1))

    countdown()
  }, 1000) // 1000 = é em milesegundos, ou seja, 1000ms = 1s
}

// Event-driven (dirigido a evento)
// Programação Imperativa (Programação que dá ordens, passo a passo COMO precisa ser feito)
// Programação Declarativa (Programação que apenas declara O QUE vai fazer e não COMO)
// Callback (chamar de volta) ou seja, vai ficar guardado e vai executar devido a alguma ação
buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut) 
})

buttonStop.addEventListener('click', function () {
  resetControls() //programação declarativa  (o que deve ser feito)
  resetTimer()
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function () {
  let newMinutes = prompt('Quantos minutos?') 
  if (!newMinutes) { //se não tiver os minutes
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})
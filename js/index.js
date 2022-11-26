//EcmaScript - 2015 - (ES6) Modules
import { resetControls } from "./controls.js"
import { updateTimerDisplay, resetTimer, countdown } from "./timer.js"

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
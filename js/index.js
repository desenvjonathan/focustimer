//EcmaScript - 2015 - (ES6) Modules
import Controls from "./controls.js"
import Timer from "./timer.js"

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
const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
}) 

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls: controls.reset
}) //injeção de dados

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  clearTimeout(timerTimeOut) 
})

buttonStop.addEventListener('click', function () {
  controls.reset() //programação declarativa  (o que deve ser feito)
  timer.reset()
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
  let newMinutes = controls.getMinutes()

  if (!newMinutes) { //se não tiver os minutes
    timer.reset()
    return
  }

  minutes = newMinutes
  timer.updateDisplay(minutes, 0)
})
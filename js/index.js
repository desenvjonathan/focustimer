//EcmaScript - 2015 - (ES6) Modules
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import { 
  buttonPause, 
  buttonPlay,
  buttonSet, 
  buttonStop, 
  buttonSoundOff, 
  buttonSoundOn, 
  minutesDisplay, 
  secondsDisplay 
} from "./elements.js"

// DOM - Document Object Model
// Refatoração: mudar um código para deixá-lo mais entendível e performático, sem alterar suas funcionalidades
// Event-driven (dirigido a evento)
// Programação Imperativa (Programação que dá ordens, passo a passo COMO precisa ser feito)
// Programação Declarativa (Programação que apenas declara O QUE vai fazer e não COMO)
// Callback (chamar de volta) ou seja, vai ficar guardado e vai executar devido a alguma ação
const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
}) //injeção de dados
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
}) //injeção de dados

const sound = Sound()

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
  sound.pressButton() //ctrl + d (ao selecionar uma palavra, muda todas de uma vez)
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.holdTheTime()
  sound.pressButton()
})

buttonStop.addEventListener('click', function () {
  controls.reset() //programação declarativa  (o que deve ser feito)
  timer.reset()
  sound.pressButton()
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  sound.bgAudio.pause()
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.bgAudio.play()
})

buttonSet.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) { //se não tiver os minutes
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
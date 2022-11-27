import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop
} from "./elements"

export default function({controls, timer, sound}) {

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
    sound.bgAudio.play()
  })
  
  buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
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
}


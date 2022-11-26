export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
}) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }
  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  function reset() { //programação imperativa (o que precisa ser feito)
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) { //se não tiver os minutes
      return false
    }

    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  }
}
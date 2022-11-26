function resetControls() { //programação imperativa (o que precisa ser feito)
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

export { resetControls }
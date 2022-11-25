// DOM 
// Document Object Model
// Refatoração: mudar um código para deixá-lo mais entendível e performático, sem alterar suas funcionalidades

const buttonPlay = document.querySelector('.play')
const buttonPause =  document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

// Event-driven (dirigido a evento)
// Programação Imperativa (Programação que dá ordens, passo a passo do que precisa ser feito)
// Callback (chamar de volta) ou seja, vai ficar guardado e vai executar devido a alguma ação
buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})
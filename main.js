// DOM 
// Document Object Model

let play = document.querySelector('.play')
let pause =  document.querySelector('.pause')

// Event-driven (dirigido a evento)
// Programação Imperativa (Programação que dá ordens, passo a passo do que precisa ser feito)
// Callback (chamar de volta) ou seja, vai ficar guardado e vai executar devido a alguma ação
play.addEventListener('click', function() {
  play.classList.add('hide')
  pause.classList.remove('hide')
})

pause.addEventListener('click', function() {
  pause.classList.add('hide')
  play.classList.remove('hide')
})
//EcmaScript - 2015 - (ES6) Modules
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import { 
  buttonPause, 
  buttonPlay,
  buttonSet, 
  buttonStop, 
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
  buttonStop
}) //injeção de dependências
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
}) //injeção de dependências

const sound = Sound()

Events({controls, timer, sound})
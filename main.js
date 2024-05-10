// Variáveis
const screen1 = document.querySelector('.screen-1')
const screen2 = document.querySelector('.screen-2')
const screen2H2 = document.querySelector('.screen-2 h2')
const buttonTry = document.querySelector('#buttonTry')
const buttonReset = document.querySelector('#buttonReset')

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Funções
// Função callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) != '') {
    if (Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10) {
      if (Number(inputNumber.value) === randomNumber) {
        toggleScreen()
        if (xAttempts === 1) {
         screen2H2.innerText = `Você acertou em ${xAttempts} tentativa!`
        } else {
          screen2H2.innerText = `Você acertou em ${xAttempts} tentativas!`
        }
      }
      xAttempts++
    } else { 
        alert('Por favor, digite um número válido entre 0 e 10!')
    }
  } else {
    alert('Campo nulo, por favor digite um valor para uma tentativa válida!')
   }
    inputNumber.value = ''
} 

// Função callback
function handleResetClick() {

  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}
// Função callback
function toggleScreen() {
  screen2.classList.toggle('hide')
  screen1.classList.toggle('hide')
}

function handlEnterPress(event) {
  if (event.key === 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

// Eventos
buttonTry.addEventListener('click', handleTryClick)
buttonReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handlEnterPress)


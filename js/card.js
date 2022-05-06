const INPUT_NUMERO = document.getElementById('numero')
const INPUT_TITULAR = document.getElementById('titular')
const INPUT_CPF = document.getElementById('cpf')
const SELECT_MES = document.getElementById('mes')
const SELECT_ANO = document.getElementById('ano')
const INPUT_CVV = document.getElementById('cvv')

const CARD_BANDEIRA = document.getElementById('card-bandeira')
const CARD_NUMERO = document.getElementById('card-numero')
const CARD_TITULAR = document.getElementById('card-titular')
const CARD_VENCIMENTO = document.getElementById('card-vencimento')
const CARD_CVV = document.getElementById('card-cvv')

const CARD_FRONT = document.getElementById('card-front')
const CARD_BACK = document.getElementById('card-back')

INPUT_NUMERO.addEventListener('keyup', () => {
  CARD_NUMERO.innerHTML = INPUT_NUMERO.value
  console.log(INPUT_NUMERO)

  // split separa os valores retirando o que se colocar dentro das aspas. Sem aspas fica só cada valor separado
  let primeiroDigito = INPUT_NUMERO.value.split('')[0]

  let bandeiras = {
    3: 'AMEX',
    4: '<img width="70px" src="/assets/visa.png">',
    5: '<img width="70px" src="/assets/mastercard.png">'
  }

  CARD_BANDEIRA.innerHTML = bandeiras[primeiroDigito] || 'BANDEIRA'

  // let primeiroDigito = INPUT_NUMERO.value.split('')[0]     Split retorna um array e separa o que quiser pelo parenteses e depois ver a posição no ĩndice.
  // let primeiroDigito - INPUT_NUMERO.value[0]
  // if (primeiroDigito === '4') {
  //   CARD_BANDEIRA.innerHTML = 'VISA'
  // } else {
  //   CARD_BANDEIRA.innerHTML = 'BANDEIRA'
  // }
})

INPUT_TITULAR.addEventListener('keyup', () => {
  // Pegar o valor e trocar pelo mesmo valor Maíusculo
  INPUT_TITULAR.value = INPUT_TITULAR.value.toUpperCase() // Transformando em maiúscula
  CARD_TITULAR.innerHTML = INPUT_TITULAR.value // Apresentando o valor no cartão
})

// Trabalhando o mes dentro da função data para que já atribua nos eventos abaixo
function montarData() {
  let mes = SELECT_MES.value

  if (mes < 10) {
    mes = `0${mes}`
  }

  return `${mes}/${SELECT_ANO.value.substr(-2)}`
}

// ALTERAR A APRESENTAÇÃO DO MÊS E ANO
SELECT_ANO.addEventListener('change', () => {
  // CARD_VENCIMENTO.innerHTML = SELECT_ANO.value[2] + SELECT_ANO.value[3]

  CARD_VENCIMENTO.innerHTML = montarData()
  //`${SELECT_MES.value}/${SELECT_ANO.value.substr(-2)}` //  SELECT_ANO.value.substr(-2)
})

SELECT_MES.addEventListener('change', () => {
  CARD_VENCIMENTO.innerHTML = montarData()
  //`${SELECT_MES.value}/${SELECT_ANO.value.substr(-2)}`
})

// Laço para adicionar os anos
for (let ano = 2022; ano <= 2030; ano++) {
  SELECT_ANO.innerHTML += `<option>${ano}</option>` // Não esquecer do incremento += para que ele repita e adicione
}

let meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

// cadaMes representa o valor no array e map faz um novo array com os valores selecionados e o índice vira o valor do html option
meses.map(function (cadaMes, indice) {
  SELECT_MES.innerHTML += `<option value="${indice + 1}">${cadaMes}</option>`
})

// for (let mes = 01; mes <= 12; mes++) {
//   SELECT_MES.innerHTML += `<option>${mes}</option>`
// }

// for (let i = 0; i <= 12; i++) {
//   SELECT_MES.innerHTML += `<option>${meses[i]}</option>`
// }

INPUT_CVV.addEventListener('keyup', () => {
  CARD_CVV.innerHTML = INPUT_CVV.value
})

INPUT_CVV.addEventListener('focus', () => {
  CARD_BACK.classList.add('animate__slideInRight')

  CARD_FRONT.setAttribute('hidden', true)
  CARD_BACK.removeAttribute('hidden')
})

INPUT_CVV.addEventListener('blur', () => {
  CARD_FRONT.classList.add('animate__slideInRight')

  CARD_BACK.setAttribute('hidden', true)
  CARD_FRONT.removeAttribute('hidden')
})

const INPUT_VALUE = document.querySelectorAll('[data-action="data-info"]')

const INPUT_MONTH = document.querySelector('#month_year')
const INPUT_YEAR = document.querySelector('#year_month')

// laço com evento e funçao para escutar o keypress
INPUT_VALUE.forEach(campValue => {
  campValue.addEventListener('keypress', () => {
    campValue.value !== '' ? successMsg(campValue) : errorMsg(campValue)
  })
})

// Função do submit com laço para verificar o preenchimento
function enviar() {
  event.preventDefault()

  INPUT_VALUE.forEach(campValue => {
    campValue.value === '' ? errorMsg(campValue) : successMsg(campValue)
  })
}

function errorMsg(campValue) {
  campValue.classList.remove('is-valid')
  campValue.classList.add('is-invalid')
}

function successMsg(campValue) {
  campValue.classList.remove('is-invalid')
  campValue.classList.add('is-valid')
}

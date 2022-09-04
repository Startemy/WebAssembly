import { printError, printResult } from './render/printResult.js'
import getDateDiff from './hendler/calcDate/getDateDiff.js'
import { countdownTimer } from './hendler/timer/timer.js';

const form = document.getElementById('datecalc');
const formTimer = document.getElementById('timer');

form.onsubmit = (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)

  const firstInput = formData.get('firstDate')
  const secondInput = formData.get('secondDate')

  const dateDiff = getDateDiff(firstInput, secondInput)
  console.log(dateDiff)

  if (!firstInput || !secondInput) {
    printError('Oooppppsss - Введите дату!!!!')
  } else {
    printResult(dateDiff)
  }
}

formTimer.onsubmit = (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)

  const toDateInput = formData.get('toDate')
  const deadline = new Date(toDateInput)
  countdownTimer(deadline)
}
import { declensionNum } from '../hendler/timer/declension.js'
import { stop } from '../hendler/timer/timer.js';

const result = document.getElementById('datecalc__result')

const $days = document.querySelector('.timer__days');
const $hours = document.querySelector('.timer__hours');
const $minutes = document.querySelector('.timer__minutes');
const $seconds = document.querySelector('.timer__seconds');
const btnStop = document.querySelector('.timer__stop')

export const printError = (errorText) => {
  result.innerText = errorText
}

export const printResult = ({ years, months, days }) => {
  result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`
}

export const printTimer = (days,hours,minutes,seconds) => {
  $days.textContent = days < 10 ? '0' + days : days
  $hours.textContent = hours < 10 ? '0' + hours : hours
  $minutes.textContent = minutes < 10 ? '0' + minutes : minutes
  $seconds.textContent = seconds < 10 ? '0' + seconds : seconds
  $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней'])
  $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов'])
  $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут'])
  $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд'])
}

btnStop.addEventListener('click', ()=> {
  stop()
})

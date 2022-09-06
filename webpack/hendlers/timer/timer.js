import { printTimer } from '../../render/printResult.js'

let stopTimer = true
let timerId = null

export const countdownTimer = (date) => {
  const runTimer = () => {
    const diff = date - new Date();
    if (stopTimer || diff == NaN) {
      clearTimeout(timerId)
    } else {
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      printTimer(days, hours, minutes, seconds)
    }
  }
  timerId = setInterval(runTimer, 1000)
}

export const startStop = () => {
  if (!stopTimer) {
    stopTimer = true
  } else {
    stopTimer = false
  }
}

import { printTimer } from '../../render/printResult.js'

let timerId = null;
let stopTimer = false

export const countdownTimer = (date) => {
  timerId = setInterval(() => {
    const diff = date - new Date();
    if (diff <= 0 && !stopTimer) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    printTimer(days, hours, minutes, seconds)
  }, 1000);
}

export const stop = () => {
  if(!stopTimer){
    stopTimer = true
  }else{
    stopTimer = false
  }
}

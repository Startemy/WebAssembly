import { printTimer } from '../calcDate/printResult.js'

let timerId = null;

export const countdownTimer = (date) => setInterval(() => {
  const diff = date - new Date();
  if (diff <= 0) {
    clearInterval(timerId);
  }
  const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
  const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

  printTimer(days, hours, minutes, seconds)

}, 1000);

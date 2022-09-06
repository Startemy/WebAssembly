let showCalc = false
let showTimer = false

const buttonCalc = document.createElement('button')
buttonCalc.innerHTML = 'Калькулятор дат'
buttonCalc.classList.add('btnCalc')
document.body.appendChild(buttonCalc)

const buttonTimer = document.createElement('button')
buttonTimer.innerHTML = 'Таймер'
buttonTimer.classList.add('btnTimer')
document.body.appendChild(buttonTimer)

const btnCalc = document.querySelector('.btnCalc')
btnCalc.addEventListener('click', () => {
  const datecalc = document.querySelector('.datecalc')
  const timer = document.querySelector('.timer')
  if (!showCalc) {
    if (showTimer) {
      timer.style.display = 'none'
      showTimer = false
    }
    datecalc.style.display = 'block'
    showCalc = true
  } else {
    datecalc.style.display = 'none'
    showCalc = false
  }
})

const btnTimer = document.querySelector('.btnTimer')
btnTimer.addEventListener('click', () => {
  const datecalc = document.querySelector('.datecalc')
  const timer = document.querySelector('.timer')
  if (!showTimer) {
    if (showCalc) {
      datecalc.style.display = 'none'
      showCalc = false
    }
    timer.style.display = 'block'
    showTimer = true
  } else {
    timer.style.display = 'none'
    showTimer = false
  }
})


const sectionForms = document.createElement('section')
document.body.appendChild(sectionForms)

const formCalc = document.createElement('form')
formCalc.classList.add('datecalc')
const fillForm = `
        <h3>Калькулятор дат</h3>
        <label>
          <strong>Первая дата:</strong>
          <input type="date" name="firstDate" />
        </label>
        <label>
          <strong>Вторая дата:</strong>
          <input type="date" name="secondDate" />
        </label>
        <button type="submit">Расчитать промежуток</button>
        <p id="datecalc__result"></p>
`
formCalc.insertAdjacentHTML('afterbegin', fillForm)
sectionForms.appendChild(formCalc)

let formTimer = document.createElement('form')
formTimer.classList.add('timer')
const fillFormTimer = `
      <h3>Таймер</h3>
      <label>
        <strong>Веедите дату:</strong>
        <input type="date" name="toDate" />
      </label>
      <button type="submit">Запустить таймер</button>
      <button type="button" class="timer__stop">Остановить таймер</button>
      <div class="left_timer">
      <div class="timer__items">
        <div class="timer__item timer__days">00</div>
        <div class="timer__item timer__hours">00</div>
        <div class="timer__item timer__minutes">00</div>
        <div class="timer__item timer__seconds">00</div>
      </div>
    </div>
`
formTimer.insertAdjacentHTML('afterbegin', fillFormTimer)
sectionForms.appendChild(formTimer)
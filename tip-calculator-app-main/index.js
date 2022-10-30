// inputs to take from user
const billAmount = document.getElementById('bill-amount')
const tipPercentHolder = document.getElementById('tip-percent')
const tipBtns = tipPercentHolder.querySelectorAll('button')
const customTip = document.getElementById('tip')
const totalPerson = document.getElementById('people-number')
const resetBtn = document.getElementById('reset-btn')

// to add amount and tip 
const tipPerPersonHolder = document.getElementById('tip-per-person')
const totalAmountPerPersonHolder = document.getElementById('total-per-person')

// var to store values
let totalAmoutWithoutTip
let tipPercent
let personToDivideBill

billAmount.addEventListener('change', (e) => {
  totalAmoutWithoutTip = e.target.value
  showAmounts(totalAmoutWithoutTip, tipPercent, personToDivideBill)
})

for (let tip of tipBtns) {
  tip.addEventListener('click', (e) => {
    tipPercent = e.target.innerText.split('%')[0]
    showAmounts(totalAmoutWithoutTip, tipPercent, personToDivideBill)
  })
}

customTip.addEventListener('change', (e) => {
  tipPercent = e.target.value
  showAmounts(totalAmoutWithoutTip, tipPercent, personToDivideBill)
})

totalPerson.addEventListener('change', (e) => {
  personToDivideBill = e.target.value
  showAmounts(totalAmoutWithoutTip, tipPercent, personToDivideBill)
})

resetBtn.addEventListener('click', () => {
  billAmount.value = ''
  customTip.value = ''
  totalPerson.value = ''
  totalAmoutWithoutTip = 0
  tipPercent = 0
  personToDivideBill = 0
  showAmounts(totalAmoutWithoutTip, tipPercent, personToDivideBill)
})

const showAmounts = (totalAmoutWithoutTip, tipPercent, personToDivideBill) => {
  // to calculate amount and tip
  if (totalAmoutWithoutTip && totalAmoutWithoutTip != 0 && tipPercent && personToDivideBill && personToDivideBill != 0) {
    const totalAmountWithTip = totalAmoutWithoutTip * (1 + tipPercent / 100)
    const totalTip = totalAmountWithTip - totalAmoutWithoutTip
    const totalPerPerson = totalAmountWithTip / personToDivideBill
    const totalTipPerPerson = totalTip / personToDivideBill
    tipPerPersonHolder.innerText = `$${totalTipPerPerson.toFixed(2)}`
    totalAmountPerPersonHolder.innerText = `$${totalPerPerson.toFixed(2)}`
  } else {
    tipPerPersonHolder.innerText = `$0.00`
    totalAmountPerPersonHolder.innerText = `$0.00`
  }
}
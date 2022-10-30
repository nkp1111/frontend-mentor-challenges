// inputs to take from user
const billAmount = document.getElementById('bill-amount')
const tipPercentHolder = document.getElementById('tip-percent')
const tipBtns = tipPercentHolder.querySelectorAll('button')
const customTip = document.getElementById('tip')
const totalPerson = document.getElementById('people-number')
const resetBtn = document.getElementById('reset-btn')

// to add amount and tip 
const tipPerPersonHolder = document.getElementById('tip-per-person')
const totalPerPersonHolder = document.getElementById('total-per-person')

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

const showAmounts = (totalAmoutWithoutTip, tipPercent, personToDivideBill) => {
  // to calculate amount and tip
  if (totalAmoutWithoutTip && tipPercent && personToDivideBill) {
    console.log(totalAmoutWithoutTip, tipPercent, personToDivideBill);
  }
}
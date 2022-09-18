// You selected
// !--Add rating here-- out of 5

//   Thank you!

//   We appreciate you taking the time to give a rating.If you ever need more support,
//   don’t hesitate to get in touch!

const SubmitBtn = document.getElementById('submit-btn')
const mainForm = document.querySelector('main')

SubmitBtn.addEventListener('click', (e) => {
  mainForm.innerHTML = `
  <img src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/17c51c55bc91c107b66fe51f5419c13a62f83677/interactive-rating-card/images/illustration-thank-you.svg" alt="thank you icon"> 
  
  `
})
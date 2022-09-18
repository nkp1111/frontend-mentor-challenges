const SubmitBtn = document.getElementById('submit-btn')
const mainForm = document.querySelector('main')
const ratingHolder = document.getElementById('rating-holder')
let rating = 0

ratingHolder.addEventListener('click', (e) => {
  rating = e.target.innerText
})

SubmitBtn.addEventListener('click', (e) => {

  mainForm.classList.toggle('active')
  mainForm.innerHTML = `
  <div>
  <img src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/17c51c55bc91c107b66fe51f5419c13a62f83677/interactive-rating-card/images/illustration-thank-you.svg" alt="thank you icon"> 
  </div>
  <p class="text-center">You selected ${rating} out of 5<p>
  <p id="ending-heading" class="fs-2 text-center"> Thank you!</p>
  <p class="text-center">
    We appreciate you taking the time to give a rating. If you ever need more support,
  don’t hesitate to get in touch!
  </p>
  `
})

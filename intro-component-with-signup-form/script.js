
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      // change invalid feedback
      const emailDiv = document.querySelector(".email-div")
      const emailInput = emailDiv.querySelector("input")
      const emailInvalidFeed = emailDiv.querySelector(".invalid-feedback")
      if (!emailInput.value) {
        emailInvalidFeed.innerText = "Email cannot be empty"
      } else {
        emailInvalidFeed.innerText = "Looks like this is not an email"
      }

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



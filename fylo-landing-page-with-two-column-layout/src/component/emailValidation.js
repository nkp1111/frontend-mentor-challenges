const checkEmailValidation = () => {
  const forms = document.querySelectorAll(".needs-validation")
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // checking for email only 
      const email = form.querySelector("input[type='email']")
      const feedbackDiv = form.querySelector("input[type='email']+div")

      const value = email.value
      let error_feedback

      //email value check
      if (!value) {
        error_feedback = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error_feedback = "Please enter a valid Email address";
      }
      // change feedback error message 
      if (feedbackDiv) {
        feedbackDiv.innerText = error_feedback
      }
      // add was validated class for validation
      e.target.classList.add("was-validated")
    })
  })
}

export default checkEmailValidation
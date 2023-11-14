const article = document.getElementById('advice')
const dice = document.getElementById('dice')
const adviceNum = document.querySelector('.advice-number')

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    getAdvice(data);
  });

const setAdvice = (data) => {
  const randomNum = Math.floor(Math.random() * data.length)
  const randomAdvice = data[randomNum]
  article.innerText = `"${randomAdvice.text}"`
  adviceNum.innerText = ` #${randomNum + 1}`
}

const getAdvice = (data) => {
  setAdvice(data)
  dice.addEventListener('click', () => {
    setAdvice(data)
  })
}

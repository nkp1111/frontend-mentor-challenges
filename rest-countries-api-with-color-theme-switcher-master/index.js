const express = require('express')
const axios = require('axios')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

const url = 'https://restcountries.com/v3.1/all'

axios.get(url)
  .then(d => setCountry(d))
  .catch(err => console.log(err))

const setCountry = (data) => {
  // console.log(data)
}

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Active on port 3000')
})

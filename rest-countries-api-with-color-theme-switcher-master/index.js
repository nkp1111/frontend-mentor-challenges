const express = require('express')
const axios = require('axios')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

const url = 'https://restcountries.com/v3.1/name/united'

axios.get(url)
  .then(d => setCountry(d))
  .catch(err => console.log(err))

let country
const setCountry = (data) => {
  country = data.data.slice(0, 8)
  // country = data.slice(0, 8)
}

app.get('/', (req, res) => {
  console.log(country);
  res.render('index', { country })
})

app.listen(3000, () => {
  console.log('Active on port 3000')
})

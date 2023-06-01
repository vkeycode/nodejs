const express = require('express')
const app = express()

app.get('/',  (req, res) => {
  res.status(200).send('anasayfa')
})

app.get('/about',  (req, res) => {
    res.status(200).send('hakkımızda')
  })

const port = 3000

app.listen(port)
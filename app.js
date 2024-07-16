
const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/views/home.html')
  })
  app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/views/contact.html')
  })
  app.get('/cake', (req, res) => {
    res.sendFile(__dirname+'/views/cake.html')
  })
  app.get('/views/cake/ahmedabad', (req, res) => {
    res.send('Hello Ahmedabad cake!')
  })
  app.get('*', (req, res) => {
    res.send('Hello Surat Cake!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
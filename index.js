require('dotenv').config()
const express = require('express');
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const daniData = {
fullName: 'danyal ahmad',
age: 20,
address: null,
phone: '000',
};

app.get('/data', (req, res) => {
  res.json(daniData)
})

app.get('/youtube', (req, res) => {
    res.send("youtube channel")
})

app.get('/chatgpt', (req,res) => {
    res.send("<h1>go to chatgpt</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
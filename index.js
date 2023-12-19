const express = require('express')
const { readdirSync } = require('fs')
const { join } = require('path')
const app = express()
app.use(express.static(join(__dirname, 'website')))

app.get('/', function (req, res) {
  res.redirect('/homepage');
});

const endpoints = readdirSync('endpoints').map(endpoint => endpoint.split(".")[0])
for (const endpoint of endpoints) {
  const path = join(__dirname, 'endpoints', endpoint)
  app.get(`/api/${endpoint}`, require(path))
}

const functions = readdirSync('functions').map(func => func.split(".")[0])
for (const func of functions) {
  const path = join(__dirname, 'functions', func)
  app.get(`/functions/${func}`, require(path))
}

app.listen(3000, () => {
  console.log('http://localhost:3000/')
})

const multiPurpose = require('multi-purpose');
console.log(multiPurpose)

// require("dotenv").config()
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
console.log("The port is:", process.env.PORT);
app.listen(process.env.PORT);

// app.listen(3000)


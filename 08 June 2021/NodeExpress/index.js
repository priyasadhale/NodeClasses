const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.write("<h1> Hello From Express.js")
}).listen(3000)

console.log("Express Server running http://localhost:3000")
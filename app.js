const { createSecretKey } = require('crypto')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h2>HELLOOOOOOO</h2>')
})

app.listen(port, () => {
    console.log(`our app is running on port ${port} how cool is that`)
})
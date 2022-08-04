const { createSecretKey } = require('crypto')
const express = require('express')
const app = express()
const port = 3000

const data = [
    {
        name: "carrot",
        colour: "orange"
    },
    {
        name: "broccoli",
        colour: "green"
    },
    {
        name: "yam",
        colour: "red"
    }
]

// set up a route
// set it up for the root which is a slash

app.get('/', (req, res) => {
    res.send(`
    <h2>HELLOOOOOOO</h2>
    <p>HELLO MY NAME IS JARED</p>
        <h1>Hello World</h1>
        <a href="/vegetables">view vegetables</a>
        `)
})

// set it up for the about page
app.get('/about', (req, res) => {
    res.send(`
        <h2 > About page</h2>
        <p>HELLO about page</p>
    `)
})

// set it up for the about page
app.get('/vegetables', (req, res) => {
    res.send(
        '<h2>About page</h2><p>HELLO about page</p>')
})

app.listen(port, () => {
    console.log(`our app is running on port ${port} how cool is that`)
})
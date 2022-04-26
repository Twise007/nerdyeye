const express = require ('express')
const path = require ('path')
const people = require ('./data')
// console.log(people)

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './public/contact.html'))
})

app.get('/data', (req, res) =>{
    res.send(people)
})

app.get('/', (req, res) =>{
    res.status(200).send(`Homepage`)
})

app.get('/about', (req, res) =>{
    res.status(200).send(`About Me`)
})

app.get('/contactform', (req, res) =>{
    res.status(200).send(`Contact`)
})

app.get('/home', (req, res) =>{
    res.status(302).redirect(`/`)
})

app.get('*', (req, res) =>{
    res.status(404).send(`404 page not found`)
})

app.listen (5000, ()=> {
    console.log(`server is listening on port.....`)
})
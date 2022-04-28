const express = require ('express')
const path = require ('path')
const people = require ('./data')

// req.params
// req.query
// req.body

const app = express ()

app.get('/people', (req, res) =>{
    // console.log(req)
    res.status(200).send(people)
})



// REQ.PARAMS
app.get('/person/:id', (req, res) =>{
    const id = req.params.id
    // const onePerson = people.map((person) =>{
    //     if (person.id == id) return person
    // })

    // res.status(200).send(onePerson)
    const onePerson = people.find((person) => person.id == id)
    if (!onePerson) return res.status(404).send(`No object ${id}`)
    res.status(200).send(onePerson)
})
// app.listen(5000, () =>{
//     console.log(`server is listening`)
// })


// REQ.QUERY

app.get('/people/query', (req, res)=>{
    const {name, limit} = req.query
    // // const result = people.filter((person) => person.name.startsWith(name))
    // let result = people.filter((person) => person.name.includes(name))
    // result = result.slice(0,Number(limit))
    // // if (!onePerson) return res.status(404).send(`No object matched your search`)
    // res.status(200).send({success: true, data:result, totalDoc: result.lenght})

        let result = people.filter((person) => person.name.includes(name))
        res.result.slice(0,Number(limit))
        res.status(200).send({success: true, data: result, totalDoc: result.lenght})
    

})

app.listen(5000, ()=> {
    console.log(`server is listening`)
})
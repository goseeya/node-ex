const express = require('express');
const router = express.Router();

let { people} = require('../data');



router.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('api/people', (req,res)=> {
    const {name} = req.body //middleware json hlped here
    if (!name) {
        return res.status(400).json({success: false, msg: 'please provida name value'})
    }
    res.status(201).json({success: true, person: name})
})

app.post('/api/people/postman',(req,res)=>{
    const {name} = req.body
    if (!name) {
        return res.status(400).json({success: false, msg: 'please provida name value'})
    }
    res.status(201).json({success: true, data: [...people, name]})
})

app.put('/api/people/:id',(rew,res)=>{
    const {id} = req.params
    const {name} = req.body
    // console.log(id, name);
    // res.send('hello world')

    const person = people.find(person=>person.id===Number(id))
    if (!person) {
        return res.status(404).json({success: false, msg: `no person with id ${id}`})
    }
    const newPeople= people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
        res.status(200).json({success: true, data: newPeople})
    })

app.delete('/api/peope/:id',(req,res)=>{
    const person = people.find(person=>person.id===Number(req.params.id))
    if (!person) {
        return res.status(404).json({success: false, msg: `no person with id ${req.params.id}`})
    }
    const newPeople= people.filter((person)=>person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
})

app.listen(500,()=>{
    console.log('Server is listening on port 5000...');
})

module.exports = router
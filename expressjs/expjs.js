// load modules
const fs = require('fs');
const express = require('express');
const app = express();
const db = require('./db');


// use middleware
app.use(express.json())


// get from db
app.get('/',(request,response)=>{
    response.send('my first express server ever!')
})
app.get('/api/students',(request,response)=>{
    db.dbFunc()
    .then(students=>response.send(students))
})


// post to db
app.post('/api/students',(request,response)=>{
    const student = request.body;
    
    db.dbFunc()
    .then(students=>{
        students.push(student);
        fs.writeFile('./db.json',JSON.stringify(students),(err)=>{
            response.send(student);
        })
    })  
})


// Route
app.get('/api/students/:id',(request,response)=>{
    const id = parseInt(request.params.id);
    
    db.dbFunc()
    .then(students=>{
        const student = students.find(s=> s.id === id)
        if(!student) response.status(404).send('This id is not available right now')
        else response.send(student)
    })
})


// server listen
app.listen(5000,()=>{
    console.log('server successfully started');
})
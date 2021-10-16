const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json())

app.get('/',(request,response)=>{
    response.send('my first express server ever!')
})
app.get('/api/students',(request,response)=>{
    fs.readFile('./db.json',(err,data)=>{
        const strData = JSON.parse(data).students;
        console.log(strData);
        // console.log(data);
        response.send(data)
    })
})

app.post('/api/students',(request,response)=>{
    const student = request.body;
    
    fs.readFile('./db.json',(err,data)=>{
        const students = JSON.parse(data);
        students.students.push(student);
        
        fs.writeFile('./db.json',JSON.stringify(students),(err)=>{
            response.send(student);
        })
    })

})



app.listen(5000,()=>{
    console.log('server successfully started');
})
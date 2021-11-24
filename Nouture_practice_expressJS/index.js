//module config
const fs = require('fs');
const express = require('express');
const app = express();


//use middleware
app.use(express.json());

const files =  JSON.parse(fs.readFileSync(`${ __dirname }/Data/sourceData.json`)) 

app.get('/data',(req,res)=>{
    res.status(200).json({
        status : "success",
        results : files.length,
        data : files
    })   
})

app.post('/data',(req,res)=>{   
    const newID = files[files.length-1].id + 1;
    const newFiles = Object.assign(
        {id : newID},
         req.body
    )

    files.push(newFiles);

    fs.writeFile(`${ __dirname }/Data/sourceData.json`, JSON.stringify(files),err=>{
        res.status(201).json({
            status:"success",
            newFiles
        })
    })

})

app.get('/data/:id',(req,res)=>{
    const id = req.params.id * 1;
    const findData = files.find(dt=> dt.id === id)
    
    if(!files[id]){
        res.status(404).send('Bad request, this data is not available')
    }else{
        res.status(200).json(findData)
    }
})



//server port configure
const PORT = 3000;
app.listen(PORT,()=>{
    console.log('server started successfully');
})
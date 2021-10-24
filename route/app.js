const express = require('express')
const route = express.Router();

route.get('/',(req,res)=>{
    res.send('This is home page');
})
route.get('/about',(req,res)=>{
    res.send('This is about page');
})



module.exports = route;
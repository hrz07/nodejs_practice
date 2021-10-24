const express = require('express');
const app = express();
const userRouter = require('./app');
app.use(express.json());
app.use(userRouter);
app.use((req,res)=>{
    res.status(404).send('Sorry this is not available');
})



const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server created successfully');
})
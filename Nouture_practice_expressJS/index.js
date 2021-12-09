const express = require('express');
const app = express();
const db = require('./connection');
const PostModel = require('./postModel');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



app.post('/', async (req, res) => {
    const { name, status } = req.body;
    try {
        const newPost = await PostModel.create({ name, status });
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.get('/', async (req,res)=>{
    try {
        const data = await PostModel.find({})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.get('/:id', async (req,res)=>{
    const {id} = req.params;
    try {
        const data = await PostModel.findById(id);
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.put('/:id', async (req,res)=>{
    const { name, status } = req.body;
    const {id} = req.params;
    try {
        const data = await PostModel.findByIdAndUpdate(id,{name,status});
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.delete('/:id', async (req,res)=>{
    // const { name, status } = req.body;
    const {id} = req.params;
    try {
        const data = await PostModel.findByIdAndDelete(id);
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = app
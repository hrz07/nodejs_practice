require('dotenv').config();

const mongoose = require('mongoose');
const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

const uri = process.env.DATABASE;
const connection = mongoose.connect(uri,connectionParams).then(()=>{
    console.log('connected to atlas');
}).catch((err)=>{
    console.log(err)
})

module.exports = connection;
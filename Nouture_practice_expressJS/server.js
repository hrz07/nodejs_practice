require('dotenv').config();
const app = require('./index')


app.listen(process.env.PORT,()=>{
    console.log('server started successfully');
})


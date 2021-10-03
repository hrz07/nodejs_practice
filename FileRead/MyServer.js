
// File read practice in nodeJS


const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{


    if(req.url === '/'){
        fs.readFile('page.html',(err,success)=>{
            res.writeHead(200,{'Content-Type' :'text/html' })
            res.write(success)
            res.end();
        })
    }
}).listen(4040);
console.log('server created')
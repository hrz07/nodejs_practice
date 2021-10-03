const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{

    if(req.url == '/'){
       let error = fs.writeFileSync('writeSync.txt','This is a text file written by Sync system');
       if(error){
           res.writeHead(200,{'Content-Type':'text/html'})
           res.write('There have an error')
           res.end();
       }else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write('File created successfully')
            res.end();
       }
    }
}).listen(5050);
console.log('server started');
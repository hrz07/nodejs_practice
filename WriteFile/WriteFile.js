const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{

    if(req.url == '/'){
        fs.writeFile('write.txt','This is a text file', (error)=>{

            if(error){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('This is an eroor!')
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('File created successfully!')
                res.end();
            }
            
        })
    }
}).listen(5000)
console.log('server created');
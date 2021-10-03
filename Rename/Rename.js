const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{
    if(req.url == '/'){
        fs.rename('file.txt','newFile.txt',(error)=>{
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('File rename failed')
                res.end()
            }else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('File rename succssfully done')
                res.end()
            }
        })
    }
}).listen(5050);
console.log('server created successfully');
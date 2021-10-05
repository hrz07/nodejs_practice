const fs = require('fs')
const http = require('http')

http.createServer((req,res)=>{
    if(req.url == '/'){
        fs.unlink('./textFile.txt',(error,success)=>{
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('File deleting failed')
                res.end()
            }else{
                {
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.write('File successfully deleted')
                    res.end()
                }
            }
        })
    }


}).listen(5050);

console.log('server create successfully');
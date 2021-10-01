const http = require('http')
http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write('<h1>Hello World</h1>')
        res.end()
    }else if(req.url === '/about'){
        res.write('This is about page')
        res.end()
    }else if(req.url === '/contact'){
        res.write('This is contact page')
        res.end()
    }else{
        res.write('This page is not available')
        res.end()
    }
    
}).listen(5050)

console.log('server created successfuly');


// console.log('Express Tutorial')
const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log('user hit the server');
    res.writeHead(200,{'content-type': 'text/html'})
    res.end('home-page')
})

server.listen(5000)

const http = require('http')

const PORT = 3000

const server = http.createServer((req,res)=>{
    res.write("<h1>Hello, this is an HTML TAG</h1> <p>Server is runnning on this port</p>")
})

server.listen(PORT, ()=>{
    console.log(`Server running on ${PORT} port`)
})


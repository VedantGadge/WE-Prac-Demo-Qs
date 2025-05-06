const express = require('express')
const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to my book store</h1>')
})

app.get('/books',(req,res)=>{
    res.send('<h1>Book genres</h1><ul><li>Fiction</li><li>Non-Fiction</li><li>Horror</li><li>History</li></ul>')
})

app.listen(PORT,()=>{
    console.log(`Console running on port ${PORT}`)
})
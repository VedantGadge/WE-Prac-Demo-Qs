const fs = require('fs')
const file = 'sample.txt'

//Create
fs.writeFileSync(file,'Vedant Gadge')

//Read
console.log(fs.readFileSync(file,'utf-8'))

//Update
fs.appendFileSync(file,'\nStuding CSE')

console.log(fs.readFileSync(file,'utf-8'))

//Delete
fs.unlinkSync(file)
console.log('file deleted')


const mongoose = require('mongoose')
const user = require('../q5/schema')

mongoose.connect('mongodb://localhost:27017/userDatabase').then(()=>{
    console.log('Mongoose connected')
    return user.findOne({}) //findOne() returns the first document by default , {} inside findOne() means no filters
}).then((data)=>{
    console.log('First users from the databse: \n',data)
    mongoose.connection.close()
}).catch((err)=>{
    console.log("Error",err)
    mongoose.connection.close()
})
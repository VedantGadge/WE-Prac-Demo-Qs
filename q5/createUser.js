const mongoose = require('mongoose')
const user = require('./schema')

mongoose.connect('mongodb://localhost:27017/userDatabase').then(()=>{
    console.log('Mongo Database connected')

    return user.create({
        name: 'Vedant',
        age: 19,
        isStudent: true,
        favShow: 'Game of Thrones'
    })
}).then((data)=>{
    console.log('User added\n',data)
    mongoose.connection.close()
}).catch((err)=>{
    console.log('Error: ',err)
    mongoose.connection.close()
})

// mongoose.connect('mongodb://localhost:27017/userDatabase').then(()=>{
//     console.log('Mongo Database connected')
//     user.deleteOne({
//         name: 'Vedant',
//         age: 19,
//         isStudent: true,
//         favShow: 'Game of Thrones'
//     })
    
// }).catch((err)=>{
//     console.log('Error: ',err)
//     mongoose.connection.close()
// })
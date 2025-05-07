const mongoose = require('mongoose')
const user = require('../q5/schema')
const express = require("express");

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/userDatabase').then(()=>{
    console.log('Mongoose connected')
}).catch((err)=>{
    console.log("Error",err)
    mongoose.connection.close()
})

app.get("/firstUser", async (req, res) => {
    try {
      const firstUser = await user.findOne({}) //findOne() returns the first document by default , {} inside findOne() means no filters
      res.send(`<h1>First user</h1><pre>${JSON.stringify(firstUser, null, 2)}</pre>`); //JSON.stringify converts JS obj/arrays into string , null means no filter fn applied, 2 is no of spaced for indentation
    } catch (err) {
      console.log(err);
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
  
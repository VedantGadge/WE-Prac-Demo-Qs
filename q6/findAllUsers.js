const mongoose = require("mongoose");
const user = require("../q5/schema");
const express = require("express");

const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/userDatabase")
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.get("/allUsers", async (req, res) => {
  try {
    const users = await user.find({});
    res.send(`<h1>All users</h1><pre>${JSON.stringify(users, null, 2)}</pre>`); //JSON.stringify converts JS obj/arrays into string , null means no filter fn applied, 2 is no of spaced for indentation
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

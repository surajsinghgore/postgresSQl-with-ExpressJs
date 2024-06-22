const express = require("express");
const app = express();
const db =require('./Connection');

app.get("/", async (req, res) => {
  try {
  


    res.status(200).json({ success: 'connection successfully'});
  } catch (error) {
    console.log(error);
  }
});

app.listen("5050", () => {
  console.log("server on 5050");
});

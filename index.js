const express = require("express");
const app = express();
const db =require('./Connection');

app.get("/", async (req, res) => {
  try {
  
    // create table
    // await client.query(
    //   "create table person(id serial primary key,name varchar(20) not null,age int)"
    // );


    res.status(200).json({ success: 'connection successfully'});
  } catch (error) {
    console.log(error);
  }
});

app.listen("5050", () => {
  console.log("server on 5050");
});

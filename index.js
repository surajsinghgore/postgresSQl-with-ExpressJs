const express = require("express");
const app = express();
const db = require("./Connection");

app.get("/", async (req, res) => {
  try {
    // create table
    // await client.query(
    //   "create table person(id serial primary key,name varchar(20) not null,age int)"
    // );

    // insert records
    // let username = "suraj";
    // let age = 21;
    // await db.pool.query(
    //   `insert into person(name,age) values('${username}',${age})`
    // );

    // getting records

    let data = await db.pool.query("select*from person");

    res.status(200).json({ data: data.rows });
  } catch (error) {
    console.log(error);
  }
});

app.listen("5050", () => {
  console.log("server on 5050");
});

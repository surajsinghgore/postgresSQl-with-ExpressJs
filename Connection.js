 const Pool=require('pg').Pool;
 const pool=new Pool({
    user: "postgres",
    host: "localhost",
    database: "Testing",
    password: "tiger",
    port: 5432
 })

 module.exports={pool}
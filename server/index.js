const express = require("express");
const app = express();
const mysql = require("mysql")

const db = mysql.createPool({
    host:"localhost",
    user: "root",
    password:"1010",
    database: "pets"
});

app.get("/", (req, res) =>{
    let SQL = 
    "INSERT INTO pet (name, age, breed) VALUES ('bob', '4', 'labrador')";

    db.query(SQL),(err, result) =>{
        console.log(err)
    }
});

app.listen(3001, ()=>{
    console.log("rodando servidor");
});
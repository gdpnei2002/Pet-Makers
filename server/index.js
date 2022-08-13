const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createPool({
    host:"localhost",
    user: "root",
    password:"1010",
    database: "pets"
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res)=>{
    const{name} = req.body;
    const{age} = req.body;
    const{breed} = req.body;

    let SQL = "INSERT INTO pet (name, age, breed)  VALUES (?,?,?)";

    db.query(SQL, [name, age, breed], (err, result) => {
        console.log(err);
    })
})

app.get("/", (req, res) =>{
    let SQL = 
    "INSERT INTO pet (name, age, breed) VALUES ('bob', '4', 'labrador')";

    db.query(SQL),(err, result) =>{
        console.log(err)
    }
});

app.get("/getList", (req, res) =>{
    let SQL = "SELECT * from pet";

    db.query(SQL, (err, result) =>{
        if (err) console.log(err);
        else res.send(result)
    })
})

app.put("/edit", (req, res) =>{
    const {id} = req.body;
    const {name} = req.body;
    const {age} = req.body;
    const {breed} = req.body;

    let SQL = "UPDATE pet SET name = ?, age = ?, breed = ? WHERE idpet = ?";

    db.query(SQL, [name, age, breed, id],(err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM pet WHERE idpet = ?";
    db.query(SQL, [id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, ()=>{
    console.log("rodando servidor");
});
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
    const{client} = req.body;
    const{animal} = req.body;

    let SQL = "INSERT INTO pet (name, age, breed, client, animal )  VALUES (?,?,?,?,?)";

    db.query(SQL, [name, age, breed, client, animal], (err, result) => {
        console.log(err);
    })
})

app.get("/", (req, res) =>{
    let SQL = 
    "INSERT INTO pet (name, age, breed, client, animal) VALUES ('bob', '4', 'labrador', 'dsa', 'Gato')";

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
    const {client} = req.body;
    const {animal} = req.body;

    let SQL = "UPDATE pet SET name = ?, age = ?, breed = ?, client = ?, animal = ? WHERE idpet = ?";

    db.query(SQL, [name, age, breed, id, client, animal],(err, result) => {
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
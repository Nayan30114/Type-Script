const express = require("express");
import { Request, Response } from 'express';
const mysql = require("mysql");

const app = express();
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user'
});

app.get("/Getuser", (req, res) => {
  const sql = "SELECT * FROM student"
  db.query(sql, (err, data) => {
    if (err) return res.json("Error")
    return res.json(data)
  })
});

app.post('/postdata', (req, res) => {
  const data = req.body;
  const sql = 'INSERT INTO student SET ?';
  db.query(sql, data, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(201).json({ message: "Data Post Successfully", id: result.insertId });
    }
  });
});

app.put('/dataupdate/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body
  const sqlQuery = "UPDATE student SET ? WHERE id =?"
  db.query(sqlQuery, [data, id], (err, result) => {
    if (err) {
      res.json(err)
    }
    else {
      res.status(200).json(result)
    }
  })
})

app.delete('/deletedata/:id', (req, res) => {
  const id = req.params.id;
  const sqlQuery = "DELETE FROM student WHERE id = ?";
  db.query(sqlQuery, id, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "Data Deleted Successfully" });
    }
  });
});


app.listen(8000, () => {
  console.log("Listening Port Successfully")
});


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.json());
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
});
app.get("/Getuser", function (req, res) {
    var sql = "SELECT * FROM student";
    db.query(sql, function (err, data) {
        if (err)
            return res.json("Error");
        return res.json(data);
    });
});
app.post('/postdata', function (req, res) {
    var data = req.body;
    var sql = 'INSERT INTO student SET ?';
    db.query(sql, data, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
        else {
            res.status(201).json({ message: "Data Post Successfully", id: result.insertId });
        }
    });
});
app.put('/dataupdate/:id', function (req, res) {
    var id = req.params.id;
    var data = req.body;
    var sqlQuery = "UPDATE student SET ? WHERE id =?";
    db.query(sqlQuery, [data, id], function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.status(200).json(result);
        }
    });
});
app.delete('/deletedata/:id', function (req, res) {
    var id = req.params.id;
    var sqlQuery = "DELETE FROM student WHERE id = ?";
    db.query(sqlQuery, id, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
        else {
            res.status(200).json({ message: "Data Deleted Successfully" });
        }
    });
});
app.listen(8000, function () {
    console.log("Listening Port Successfully");
});

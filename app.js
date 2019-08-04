const express = require('express');
const mysql = require('mysql');
const db_password = require('./config');
const port = process.env.PORT || 3000;

// Create connection
const db = mysql.createConnection({
  host    :'34.68.38.219',
  user    :'root',
  password: db_password,
  database:'Admin',
  debug: false
})

// Connect
db.connect((err) => {
  if(err){
    console.log(err)
  }
  console.log('MySql Connected...');
})

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err, result) => {
    if(err) 
      console.log(err)
    console.log(result);
    res.send('Database created...');
  });
})

// Create table
app.get('createpoststable', (req, res) => {
  let sql ='CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
  db.query(sql, (err, result) => {
    if(err) 
    console.log(err)
    console.log(result);
    res.send('Posts table created...');
  })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
})
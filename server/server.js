const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const env = require('dotenv');
const connection = require('./mySQL');
const users = require("./Controller/Users.js").router;
const warehouse = require("./Controller/Warehouse.js").router;
const path = require('path')

app.use(cors());

// Configuring body parser middleware

//? HomePage
app.use(express.static(path.join(__dirname, '/public/client/HomePage')))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/client/HomePage/HP.html'));
});

//? Login Page
app.use(express.static(path.join(__dirname, '/public/client/LoginPage')))
app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/client/LoginPage/Login.html'));
});

//? Register Page
app.use(express.static(path.join(__dirname, '/public/client/Register_page')))
app.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/client/Register_page/Register.html'));
});

//? Personal Area Page
app.use(express.static(path.join(__dirname, '/public/client/PersonalErea')))
app.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/client/PersonalErea/Stu-Lec.html'));
});

//? Login Page
app.use(express.static(path.join(__dirname, '/public/client/LoginPage')))
app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/client/LoginPage/Login.html'));
});

//? table Page
app.use(express.static(path.join(__dirname, '/public/client/Table_items')))
app.get('/table', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/client/Table_items/table.html'));
});



// Todo: Add Routes

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', users);
app.use('/warehouse', warehouse);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

module.exports = app;
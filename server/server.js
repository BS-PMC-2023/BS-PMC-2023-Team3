const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const env = require('dotenv')
const connection = require('./mySQL');
const users = require("./Controller/Users.js").router;
const warehouse = require("./Controller/Warehouse.js").router;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', users);
app.use('/warehouse', warehouse);


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
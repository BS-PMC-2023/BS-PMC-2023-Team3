const connection = require('../mySQL');
const express = require('express');
const router = express.Router();

router.post('/add', addItem);
router.post('/UpdateItem', UpdateItem);
router.delete('/deleteItem', deleteItem);
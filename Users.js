const connection = require('../mySQL');
const express = require('express');
const router = express.Router();


router.post('/login', login);

async function login(req, response) {
    const db = await connection();
    db.execute('select * from users where username = :1', [req.body.username], (err, res) => {
        if (res && res.rows[0]) {
            if (res.rows[0][5]==req.body.username && res.rows[0][6]==req.body.password) {            
                response.status(200).contentType('application/json').json({
                    "message": "login ok!"
                })
            }
            else {
                response.status(400).contentType('application/json').json({
                    "message": "Wrong username or password"
                })
            }
        }
        else {
            response.status(400).contentType('application/json').json({
                "message": "Wrong username or password"
            })
        }
    })
}
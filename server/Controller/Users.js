const connection = require('../mySQL');
const express = require('express');
const router = express.Router();

router.post('/login', login);
router.post('/register', addUser);

async function login(req, response) {
    const db = await connection();
    db.execute('select * from users where username = :1', [req.body.USERNAME], (err, res) => {
        if (res && res.rows[0]) {
            if (res.rows[0][5]==req.body.USERNAME && res.rows[0][6]==req.body.PASSWORD) {            
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

async function addUser(req, response) {
    const db = await connection();
    let userObj = req.body;
    let sql = `INSERT INTO users (FIRSTNAME, LASTNAME, EMAIL, BIRTHDAY, USERNAME,  PASSWORD) 
            VALUES(:1,:2, :3, :4, :5, :6)`;

    let values = [
        userObj.FIRSTNAME,
        userObj.LASTNAME,
        userObj.EMAIL,
        userObj.BIRTHDAY,
        userObj.USERNAME,
        userObj.PASSWORD
    ];

    db.execute(sql, values,  (err, res) => {
        if (err) {
            console.log(err);
            return response.status(400).json({ message: "Existing username or existing email" });
        } else {
            console.log(res)
            if (res.rowsAffected > 0) {
                return response.json({ message: "New user created successfully" });
            } else {
                return response.status(400).json({ message: "Something went wrong" });
            }
        }
    });

}

module.exports = { router};
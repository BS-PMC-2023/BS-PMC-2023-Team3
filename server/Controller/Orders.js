const connection = require('../mySQL');
const express = require('express');
const router = express.Router();

router.post('/addOrderForPS', addOrderForPS);
router.get('/getAllOrdersPS', getAllOrdersPS);

async function addOrderForPS(req, response) {
    const db = await connection();
    let orderObj = req.body;
    let sql = `INSERT INTO Studio_Podcast (USERNAME, TYPE, NUM, DATE_TIME) 
            VALUES(:1, :2, :3, TO_TIMESTAMP(:4, 'DD/MM/YYYY HH:MI'))`;

    let values = [
        orderObj.USERNAME,
        orderObj.TYPE,
        orderObj.NUM,
        orderObj.DATE_TIME
    ];

    db.execute(sql, values,  (err, res) => {
        if (err) {
            console.log(err);
            return response.status(400).json({ message: "The podcast or studio is busy at the time you chose" });
        } else {
            console.log(res)
            if (res.rowsAffected > 0) {
                return response.json({ message: "New order created successfully" });
            } else {
                return response.status(400).json({ message: "Something went wrong" });
            }
        }
    });

}

async function getAllOrdersPS(req, response) {
    const db = await connection();
    db.execute("SELECT * FROM Studio_Podcast" ,(err, res)=> {
    if (res.rows.length == 0) {
        return response.status(400).json({ message: "Orders is not found" });
    }
    if (!err) {
            let array =[];
            res.rows.map((orders) => {
                let obj = {
                    USERNAME: orders[0], 
                    TYPE: orders[1],
                    NUM: orders[2],
                    DATE_TIME: orders[3].toLocaleString('he-IL').split('').join('')
                }
                array.push(obj)
            })
            return response.status(200).json(array);
    } else {
            console.log(err);
            response.status(400).json({ message: "Somting went wrong" });
    }
    });
}

module.exports = { router};
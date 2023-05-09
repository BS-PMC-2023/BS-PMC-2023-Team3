const connection = require('../mySQL');
const express = require('express');
const router = express.Router();

router.post('/addOrderForPS', addOrderForPS);
router.post('/UpdateStatusOrderPS', UpdateStatusOrderPS);
router.get('/getAllOrdersPS', getAllOrdersPS);
router.get('/getAllOrderPSForUser', getAllOrderPSForUser);
router.post('/UpdateStatusOrderItem', UpdateStatusOrderItem);
router.get('/getAllOrdersItem', getAllOrdersItem);
router.get('/getAllOrderItemForUser', getAllOrderItemForUser);

async function addOrderForPS(req, response) {
    const db = await connection();
    let orderObj = req.body;
    let sql = `INSERT INTO Studio_Podcast (USERNAME, TYPE, NUM, DATE_TIME) 
            VALUES(:1, :2, :3, TO_TIMESTAMP(:4, 'DD/MM/YYYY HH24:MI'))`;

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

async function UpdateStatusOrderPS(req, response) {
    const db = await connection();
    let sql, val;
    let status = req.body.STATUS , date_time = req.body.DATE_TIME, type = req.body.TYPE,number= req.body.NUM;
    console.log(status, date_time, type, number);
    if(status == 'Reject')
    {
        sql = "DELETE FROM Studio_Podcast WHERE TYPE= :1 AND NUM= :2 AND DATE_TIME= TO_TIMESTAMP(:3, 'DD/MM/YYYY HH24:MI')";
        val = [type, number, date_time];
    }
    if(status == 'Accept') 
    {
        sql = "UPDATE Studio_Podcast SET STATUS= :1 WHERE TYPE= :2 AND NUM= :3 AND DATE_TIME= TO_TIMESTAMP(:4, 'DD/MM/YYYY HH24:MI')";
        val = [status,type, number, date_time];
    }
    db.execute(sql, val, (err, res) => {
        if (err) {
            response.status(400).json({ message: "Something went wrong" });
        } else {
            response.status(200).json({ message: "update successfully!" });
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

async function getAllOrderPSForUser(req, response) {
    const db = await connection();
    let user= [req.query.USERNAME];
    db.execute("SELECT * FROM Studio_Podcast WHERE USERNAME= :1", user ,(err, res)=> {
    if (res.rows.length == 0) {
        return response.status(400).json({ message: "Orders for " +user+" is not found" });
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

async function UpdateStatusOrderItem(req, response) {
    const db = await connection();
    let sql, val;
    let status = req.body.STATUS_ORDER, user = req.body.USERNAME, bor_date = req.body.BORROW_DATE,item_name = req.body.NAMEITEM,item_sn= req.body.S_N;
    
    if(status == 'Reject')
    {
        sql = "UPDATE orders SET STATUS_ORDER= :1 WHERE USERNAME= :2 AND NAMEITEM= :3 AND S_N= :4 AND BORROW_DATE= to_date(:5,'DD/MM/YYYY')";
        val = [status, user, item_name, item_sn, bor_date];
    }
    if(status == 'Accept') 
    {
        sql = "UPDATE orders SET STATUS_ORDER= :1 WHERE USERNAME= :2 AND NAMEITEM= :3 AND S_N= :4 AND BORROW_DATE= to_date(:5,'DD/MM/YYYY')";
        val = [status, user, item_name, item_sn, bor_date];
    }
    db.execute(sql, val, (err, res) => {
        if (err) {
            response.status(400).json({ message: "Something went wrong" });
        } else {
            response.status(200).json({ message: "update successfully!" });
        }
    });
}

async function getAllOrdersItem(req, response) {
    const db = await connection();
    db.execute("SELECT * FROM orders" ,(err, res)=> {
    if (res.rows.length == 0) {
        return response.status(400).json({ message: "Orders is not found" });
    }
    if (!err) {
        let array =[];
        res.rows.map((orders) => {
            let obj = {
                USERNAME: orders[0], 
                NAMEITEM: orders[1],
                S_N: orders[2],
                BORROW_DATE: orders[3].toLocaleDateString('he-IL').split('').join(''),
                RETURN_DATE: orders[4].toLocaleDateString('he-IL').split('').join(''),
                STATUS: orders[5]
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

async function getAllOrderItemForUser(req, response) {
    const db = await connection();
    let user= [req.query.USERNAME];
    db.execute("SELECT * FROM orders WHERE USERNAME= :1", user ,(err, res)=> {
    if (res.rows.length == 0) {
        return response.status(400).json({ message: "Orders for " +user+" is not found" });
    }
    if (!err) {
        let array =[];
        res.rows.map((orders) => {
            let obj = {
                USERNAME: orders[0], 
                NAMEITEM: orders[1],
                S_N: orders[2],
                BORROW_DATE: orders[3].toLocaleDateString('he-IL').split('').join(''),
                RETURN_DATE: orders[4].toLocaleDateString('he-IL').split('').join(''),
                STATUS: orders[5]
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
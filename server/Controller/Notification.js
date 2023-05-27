const connection = require('../mySQL');
const express = require('express');
const router = express.Router();

router.get('/CheckDate', CheckDate);
router.get('/getAllNotiForUser', getAllNotiForUser);

async function getAllNotiForUser(req, response) {
    const db = await connection();
    let user= [req.query.USERNAME];
    db.execute("SELECT * FROM notifications WHERE association= :1", user ,(err, res)=> {
    if (res.rows.length == 0) {
        return response.status(400).json({ message: "Orders for " +user+" is not found" });
    }
    if (!err) {
        let array =[];
        res.rows.map((notification) => {
            let obj = {
                DESCRIPTION: notification[0], 
                READ: notification[2]
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

async function CheckDate(req, response) {
    const db = await connection();
    const date = new Date();
    let sql = `SELECT * FROM orders WHERE BORROW_DATE <= :1`;
    let orders = await db.execute(sql,[date] );
    console.log(orders.rows);
    for(let i = 0; i<orders.rows.length; i++)
    {
        let number = getOrderForStatus(date.toLocaleDateString('he-IL').split('').join(''), orders.rows[i][4].toLocaleDateString('he-IL').split('').join(''));
        if(number <= 7 && number >0)
        {
            sql = `INSERT INTO notifications (DESCRIPTION, ASSOCIATION) VALUES(:1, :2)`;
            let description = "Reminder: There are " +number+" days left to return an item '" + orders.rows[i][1] + "' with the serial number : '" + orders.rows[i][2]+"'"; 
            db.execute(sql,[description,orders.rows[i][0]] ,  (err, res) => {
            if (err) 
            {
                console.log(err);
                return response.status(400).json({ message: "failed add notification" });
            }
            });
        } else if(number == 0)
        {
            sql = `INSERT INTO notifications (DESCRIPTION, ASSOCIATION) VALUES(:1, :2)`;
            let description = "Today is the last day to return the item '" + orders.rows[i][1] + "' with the serial number : '" + orders.rows[i][2]+"'"; 
            db.execute(sql,[description,orders.rows[i][0]] ,  (err, res) => {
            if (err) 
            {
                console.log(err);
                return response.status(400).json({ message: "failed add notification" });
            }
            });
        }else if(number<0)
        {
            sql = `INSERT INTO notifications (DESCRIPTION, ASSOCIATION) VALUES(:1, :2)`;
            let description = "You are "+number*-1+" days late in returning an item '" + orders.rows[i][1] + "' with the serial number : '" + orders.rows[i][2]+"' , please return it immediately!!!"; 
            db.execute(sql,[description,orders.rows[i][0]] ,  (err, res) => {
            if (err) 
            {
                console.log(err);
                return response.status(400).json({ message: "failed add notification" });
            }
            });
        }
    }
    return response.status(200).json({ message: "yes!" });
}

function getOrderForStatus(borrow, ret) {
    borrow = borrow.split('.')[2]+"/"+borrow.split('.')[1]+"/"+borrow.split('.')[0];
    ret = ret.split('.')[2]+"/"+ret.split('.')[1]+"/"+ret.split('.')[0];
    const a = new Date(borrow),
    b = new Date(ret),
    difference = dateDiffInDays(a, b);
    console.log(difference);
  return difference;
}


function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    const utc1 = Date.UTC( a.getFullYear(), a.getMonth(),a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(),b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
  

  
module.exports = { router};










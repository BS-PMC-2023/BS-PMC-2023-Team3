

router.get('/watchItems', getAllItems);

async function UpdateItem(req, response) {
    const db = await connection();
    let sql, val;
    let status = req.body.STATUS;
    let item_name = req.body.NAME;
    let item_sn= req.body.S_N;

    if(status == 'FAULTY')
    {
        sql = "UPDATE items SET status= :1 WHERE NAME= :2 AND S_N= :3";
        val = [status, item_name, item_sn];
    }
    else if(status == 'OUT')
    {
        let bor_date = req.body.BORROW_DATE;
        let ret_date = req.body.RETURN_DATE;
        sql = "UPDATE items SET status= :1, BORROW_DATE= :2, RETURN_DATE= :3 WHERE NAME= :4 AND S_N= :5";
        val = [status, bor_date, ret_date, item_name, item_sn];
    }
    else 
    {
        sql = "UPDATE items SET status= :1, BORROW_DATE= :2, RETURN_DATE= :3 WHERE NAME= :4 AND S_N= :5";
        val = [status, 'NULL' , 'NULL', item_name, item_sn];
    }
    console.log(val);
    db.execute(sql, val, (err, res) => {
        if (err) {
            response.status(400).json({ message: "Something went wrong" });
        } else {
            response.status(200).json({ message: "update successfully!" });
        }
    });
}

async function addItem(req, response) {
    const db = await connection();
    let itemObj = req.body;
    console.log(itemObj);
    let sql = `INSERT INTO items (NAME, S_N, CATEGORY)
            VALUES(:1,:2, :3)`;

    let values = [
        itemObj.NAME,
        itemObj.S_N,
        itemObj.CATEGORY
    ];

    db.execute(sql, values,  (err, res) => {
        if (err) {
            console.log(err);
            return response.status(400).json({ message: "ERROR" });
        } else {
            console.log(res)
            if (res.rowsAffected > 0) {
                return response.json({ message: "New item successfully added" });
            } else {
                return response.status(400).json({ message: "Something went wrong" });
            }
        }
    });

}

async function deleteItem(req, response) {
    const db = await connection();
    db.execute('DELETE FROM items WHERE NAME= :1 AND S_N= :2', [req.query.name, req.query.s_n], (err, res) => {
        if (err) {
            response.status(400).json({ message: "Something went wrong" });
        } else {
            response.status(200).json({ message: "delete successfully!" });
        }
    });
}

async function getSize(req, response){
    const db = await connection();
    let sql = "SELECT COUNT(*) FROM " + [req.query.table];
    db.execute(sql, [],(err, res)=> {
        if (!err) {
             response.json(res.rows[0][0])
        } else {
                console.log(err);
                response.status(400).json({ message: "Somting went wrong" });
        }
        });
    }

    async function getAllItems(req, response) {
        const db = await connection();
        db.execute('select * from items' ,[], (err, res) => {
        console.log(res);
        if (res.rows.length == 0) {
            return response.status(400).json({ message: "no" });
        }
            if (!err) {
                let array = [];
               for(let i=0;i<res.rows.length;i++)
                {
                    let obj = { name: res.rows[i][0], s_n: res.rows[i][1], category:  res.rows[i][2], model:  res.rows[i][3], ancillary_items:  res.rows[i][4], amount: res.rows[i][5], status: res.rows[i][6], precautions: res.rows[i][7], borrow_date: res.rows[i][8], return_date: res.rows[i][9]}
                    array.push(obj);
                }
                return response.status(200).json(array);
            } else {
                console.log(err);
                response.status(400).json({ message: "Error" });
            }
        });
    }
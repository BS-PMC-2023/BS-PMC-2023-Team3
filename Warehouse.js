



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
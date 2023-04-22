router.post('/register', addUser);
router.get('/watchUsers', getAllUsers);
router.get('/watchUser', getUser);

async function getAllUsers(req, response) {
    const db = await connection();
    db.execute('select * from users', [] ,(err, res) => {

    if (res.rows.length == 0) {
        return response.status(400).json({ message: "no" });
    }
        if (!err) {
            let array = [];
           for(let i=0;i<res.rows.length;i++)
            {
                let obj = { firstname: res.rows[i][0], lastname: res.rows[i][1], email:  res.rows[i][2],birthday:  res.rows[i][3], title:  res.rows[i][4],username: res.rows[i][5],password: res.rows[i][6] }
                array.push(obj);
            }
            return response.status(200).json(array);
        } else {
            console.log(err);
            response.status(400).json({ message: "Error" });
        }
    });
}


async function getUser(req, response) {
    const db = await connection();

    db.execute("select * from users where username= :1", [req.query.USERNAME],(err, res)=> {
    if (res.rows.length == 0) {
        return response.status(400).json({ message: "user is not found" });
    }
    if (!err) {
         response.json(res.rows)
    } else {
            console.log(err);
            response.status(400).json({ message: "Somting went wrong" });
    }
    });
}

module.exports = { router};
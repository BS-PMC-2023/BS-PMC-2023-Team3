const oracledb = require('oracledb');
oracledb.autoCommit = true;
const connection = async ()=> (oracledb.getConnection({
    user          : 'WareHouseP', 
    password      : '123456',
    connectString : 'localhost/xe'
}));


/*const oracledb = require('oracledb');
oracledb.autoCommit = true;
const connection = async ()=> (oracledb.getConnection({
    user          : 'yovel', 
    password      : 'yovel1201',
    connectString : 'localhost/xe'
}));*/


module.exports = connection;
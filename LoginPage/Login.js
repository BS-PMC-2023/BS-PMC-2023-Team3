




/*function validateCredentials(email, password) {
    // Regular expression pattern for matching a valid email
    const emailPattern = /^([a-zA-Z0-9_-]+)@ac\.sce\.ac\.il$/;
  
    // Check if the email matches the pattern
    if (!emailPattern.test(email)) {
      return "Invalid email format";
    }
  
    // Check if the email and password match a record in the database
    const db = [
      { email: 'user1@ac.sce.ac.il', password: 'password1' },
      { email: 'user2@ac.sce.ac.il', password: 'password2' },
      { email: 'user3@ac.sce.ac.il', password: 'password3' }
    ];
  
    const match = db.find(record => record.email === email && record.password === password);
    if (!match) {
      return "Invalid email or password";
    }
  
    // If the email and password match a record in the database, return true
    return true;
}

const mysql = require('mysql');

function validateCredentials(email, password) {
  // Regular expression pattern for matching a valid email
  const emailPattern = /^([a-zA-Z0-9_-]+)@ac\.sce\.ac\.il$/;

  // Check if the email matches the pattern
  if (!emailPattern.test(email)) {
    return "Invalid email format";
  }

  // Connect to the database
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name'
  });

  connection.connect();

  // Check if the email and password match a record in the database
  const sql = `SELECT * FROM Login WHERE email = ? AND password = ?`;
  const params = [email, password];

  connection.query(sql, params, function (error, results, fields) {
    if (error) {
      connection.end();
      return "Database error";
    }

    if (results.length === 0) {
      connection.end();
      return "Invalid email or password";
    }

    // If the email and password match a record in the database, return true
    connection.end();
    return true;
  });
}*/
/*
console.log(validateCredentials('user1@ac.sce.ac.il', 'password1')); // true
console.log(validateCredentials('user2@ac.sce.ac.il', 'wrongpassword')); // "Invalid email or password"
console.log(validateCredentials('not-an-email', 'password3')); // "Invalid email format"
*/

  
  